(function(win){

	'use strict';

	/**
	 * Debug.
	 * @type {mixed}
	 */
	var debug = false;
	var debug_settings = {
		LOG_TRANSITIONS         : true,
		LOG_TRANSITIONS_INTERNAL: true,
		LOG_VIEW_LOOKUPS        : true,
		LOG_ACTIVE_GENERATION   : true,
		LOG_BINDINGS            : true
	};

	/**
	 * Questions.
	 * @type {object}
	 */
	var questions = win.questions;

	/**
	 * Application namespace.
	 * @type {object}
	 */
	var TS = Ember.Application.create(debug ? debug_settings : {});

	/**
	 * Application router.
	 */
	TS.Router.map(function(){

		this.route('index', { path: '/' });
		this.route('question', { path: '/:question_id' });

	});

	/**
	 * Application routes.
	 * @type {object}
	 */
	TS.IndexRoute    = Ember.Route.extend({});
	TS.QuestionRoute = Ember.Route.extend({
		setupController: function(controller, model){
			controller.set('model', model);
		},
		model: function(params){
			return win.questions[params.question_id - 1];
		}
	});

	/**
	 * Application controllers.
	 * @type {object}
	 */
	TS.IndexController    = Ember.ObjectController.extend({});
	TS.QuestionController = Ember.ObjectController.extend({
		isCorrect: false
	});

	/**
	 * Application views.
	 * @type {object}
	 */
	TS.ApplicationView = Ember.View.extend({
		classNames: ['wrapper']
	});

	TS.IndexView = Ember.View.extend({
		actions: {
			start: function(){
				this.controller.transitionToRoute('question', questions[0]);
			}
		}
	});

	TS.QuestionView = Ember.View.extend({
		actions: {
			next: function(){
				var index = this.controller.get('model.id');

				this.controller.transitionToRoute('question', questions[index]);
			}
		},
		contentChanged: function(){
			Ember.run.scheduleOnce('afterRender', this, this.updateCodeMirror);
		}.observes('controller.content.[]'),
		didInsertElement: function(){

			var $codeDiv = this.$('.code');
			var model    = this.controller.get('model');
			var self     = this;
			var $lines;
			var codemirror;

			// run the highlighter
			codemirror = CodeMirror($codeDiv[0], {
				value: model.code,
				theme: 'ts',
				type: 'xml',
				readOnly: 'nocursor',
				lineNumbers: true,
				lineNumberFormatter: function(number){
					return number + '.';
				},
				viewportMargin: Infinity
			});	

			this.set('codemirror', codemirror);

			// reference to codemirror lines
			$lines = $('.CodeMirror-code').children();

			// handle click
			$('.CodeMirror-code').on('click', '> div', function(e){

				var selected = [];
				var diff     = [];
				var answers;
				
				answers = self.controller.get('model.answers');
				$lines  = self.get('$lines') || $lines;

				// toggle highlight class
				$(this).toggleClass('cm-selected');

				// get selected indexes
				$lines.each(function(index, line){
					
					if ($lines.eq(index).hasClass('cm-selected')) {
						selected.push(index + 1);
					}

				});

				// compare
				diff = _.difference(answers, selected);

				// toggle button
				self.controller.set('isCorrect', !diff.length && answers.length === selected.length);

			});

		},
		willDestroyElement: function(){
			$('.CodeMirror-code').off('click');
		},
		updateCodeMirror: function(){

			var codemirror = this.get('codemirror');
			var inDOM      = this.state == 'inDOM';

			if (inDOM) {
				codemirror.doc.setValue(this.controller.get('model.code'));

				this.set('$lines', $('.CodeMirror-code').children().removeClass('cm-selected'));
				this.controller.set('isCorrect', false);
			}

		}
	});
	
	/**
	 * Extend window object.
	 */
	win.TS = TS;

})(this);