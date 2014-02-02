(function(win){

	'use strict';

	win.questions = [
		{
			"id": 1,
			"question": "*",
			"code": "<div class=\"header\">\n\t<a href=\"#\" class=\"logo\">Company Name</a>\n</div>\n<div class=\"main\">\n\t<ul>\n\t\t<li>List Item 1</li>\n\t\t<li>List Item 2</li>\n\t\t<li>List Item 3</li>\n\t</ul>\n</div>",
			"answers": [1, 2, 4, 5, 6, 7, 8]
		},
		{
			"id": 2,
			"question": ".nav",
			"code": "<div class=\"header\">\n\t<a href=\"#\" class=\"logo\">Company Name</a>\n</div>\n<div class=\"nav\">\n\t<ul>\n\t\t<li><a href=\"#\">Home</a></li>\n\t\t<li><a href=\"#\">About</a></li>\n\t\t<li><a href=\"#\">Contact</a></li>\n\t</ul>\n</div>",
			"answers": [4]
		},
		{
			"id": 3,
			"question": "#slider",
			"code": "<div id=\"slider\">\n\t<ul class=\"slides\">\n\t</ul>\n</div>\n<div id=\"slider-clients\">\n\t<ul id=\"slides\">\n\t</ul>\n</div>",
			"answers": [1]
		},
		{
			"id": 4,
			"question": ".article.article-alt",
			"code": "<div class=\"article\">\n\t<h2>Article Title 1</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class=\"article article-alt\">\n\t<h2>Article Title 2</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class=\"article article-alt\">\n\t<h2>Article Title 3</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class=\"article\">\n\t<h2>Article Title 4</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class=\"article\">\n\t<h2>Article Title 5</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>\n<div class=\"article article-alt\">\n\t<h2>Article Title 5</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>",
			"answers": [6, 11, 26]
		},
		{
			"id": 5,
			"question": "h2 ~ p",
			"code": "<h1>About</h1>\n<div class=\"article\">\n\t<h2>Lorem ipsum</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<ul>\n\t\t<li>List Item 1</li>\n\t\t<li>List Item 2</li>\n\t\t<li>List Item 3</li>\n\t</ul>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>",
			"answers": [4, 5, 6, 12]
		}
	];

})(this);