(function(win){

	'use strict';

	/**
	 * Debug.
	 * @type {mixed}
	 */
	var debug = true;
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
	TS.IndexRoute = Ember.Route.extend({});
	TS.QuestionRoute = Ember.Route.extend({
		model: function(params){
			return win.questions[params.question_id - 1];
		}
	});

	/**
	 * Application controllers.
	 * @type {object}
	 */
	TS.IndexController = Ember.ObjectController.extend();

	/**
	 * Application views.
	 * @type {object}
	 */
	TS.IndexView = Ember.View.extend({
		actions: {
			start: function(){
				this.controller.transitionToRoute('question', questions[0]);
			}
		}
	});

	TS.QuestionView = Ember.View.extend({
		didInsertElement: function(){
				
			var $codeDiv = this.$('.code');
			// var instance = CodeMirror($codeDiv[0], {
			// 	value: 
			// })
			console.log(this);

		}
	});

	/**
	 * Extend window object.
	 */
	win.TS = TS;

})(this);