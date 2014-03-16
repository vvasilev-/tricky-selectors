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
		},
		{
			"id": 6,
			"question": "h3:not(.widget-title)",
			"code": "<div class=\"content\">\n\t <div class=\"article\">\n\t\t <h3>Sub heading</h3>\n\t\t <p>Lorem ipsum dolor sit amet.</p>\n\t </div>\n </div>\n <div class=\"sidebar\">\n\t <ul class=\"widgets\">\n\t\t <li class=\"widget\">\n\t\t\t <h3 class=\"widget-title\">Recent posts</h3>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Post Title</a></li>\n\t\t\t\t <li><a href=\"#\">Post Title</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t </ul>\n </div>",
			"answers": [3]
		},
		{
			"id": 7,
			"question": ".nav > ul > li > ul",
			"code": "<div class=\"nav\">\n\t <ul>\n\t\t <li><a href=\"#\">Home</a></li>\n\t\t <li>\n\t\t\t <a href=\"#\">About</a>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Me</a></li>\n\t\t\t\t <li><a href=\"#\">Company</a></li>\n\t\t\t\t <li><a href=\"#\">Services</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t\t <li><a href=\"#\">Project</a></li>\n\t\t <li><a href=\"#\">Contact</a></li>\n\t </ul>\n </div>",
			"answers": [6]
		},
		{
			"id": 8,
			"question": ".nav ul > li:first-child",
			"code": "<div class=\"nav\">\n\t <ul>\n\t\t <li><a href=\"#\">Home</a></li>\n\t\t <li>\n\t\t\t <a href=\"#\">About</a>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Me</a></li>\n\t\t\t\t <li><a href=\"#\">Company</a></li>\n\t\t\t\t <li><a href=\"#\">Services</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t\t <li>\n\t\t\t <a href=\"#\">Projects</a>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Design</a></li>\n\t\t\t\t <li><a href=\"#\">Development</a></li>\n\t\t\t\t <li><a href=\"#\">Promo</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t\t <li><a href=\"#\">Contact</a></li>\n\t </ul>\n </div>",
			"answers": [3, 7, 15]
		},
		{
			"id": 9,
			"question": ".nav li:last-child",
			"code": "<div class=\"nav\">\n\t <ul>\n\t\t <li><a href=\"#\">Home</a></li>\n\t\t <li>\n\t\t\t <a href=\"#\">About</a>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Me</a></li>\n\t\t\t\t <li><a href=\"#\">Company</a></li>\n\t\t\t\t <li><a href=\"#\">Services</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t\t <li>\n\t\t\t <a href=\"#\">Projects</a>\n\t\t\t <ul>\n\t\t\t\t <li><a href=\"#\">Design</a></li>\n\t\t\t\t <li><a href=\"#\">Development</a></li>\n\t\t\t\t <li><a href=\"#\">Promo</a></li>\n\t\t\t </ul>\n\t\t </li>\n\t\t <li><a href=\"#\">Contact</a></li>\n\t </ul>\n </div>",
			"answers": [9, 17, 20]
		},
		{
			"id": 10,
			"question": "[class^=\"ico-\"]",
			"code": "<div class=\"services\">\n\t <i class=\"ico-html\"></i>\n\t <i class=\"ico-css\"></i>\n\t <i class=\"ico-wordpress\"></i>\n\t <i class=\"ico-mobile\"></i>\n </div>\n <div class=\"about\">\n\t <h2>About us <i class=\"about-ico\"></i></h2>\n\t <p>Lorem ipsum dolor sit amet.</p>\n </div>",
			"answers": [2, 3, 4, 5]
		},
		{
			"id": 11,
			"question": "img[src$=\".jpg\"]",
			"code": "<div class=\"article\">\n\t <a href=\"#\" class=\"article-avatar\">\n\t\t <img src=\"css/images/avatar.jpg.png\" alt=\"\" />\n\t </a>\n\t <div class=\"article-content\">\n\t\t <h3>Article heading</h3>\n\t\t <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t <p><img src=\"css/images/article-image.jpg\" alt=\"\" /></p>\n\t </div>\n </div>",
			"answers": [8]
		},
		{
			"id": 12,
			"question": ":root",
			"code": "<!DOCTYPE html>\n <html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\">\n <head>\n\t <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\" />\n\t <title>Document title</title>\n </head>\n <body>\n\t <h1>Title</h1>\n\t <p>Lorem ipsum dolor sit amet.</p>\n </body>\n </html>\n",
			"answers": [2]
		},
		{
			"id": 13,
			"question": "h2 + p",
			"code": "<h1>About</h1>\n<div class=\"article\">\n\t<h2>Lorem ipsum</h2>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<p>Lorem ipsum dolor sit amet.</p>\n\t<ul>\n\t\t<li>List Item 1</li>\n\t\t<li>List Item 2</li>\n\t\t<li>List Item 3</li>\n\t</ul>\n\t<p>Lorem ipsum dolor sit amet.</p>\n</div>",
			"answers": [4]
		},
		{
			"id": 14,
			"question": "li:nth-child(2n+1)",
			"code": "<ul>\n\t <li>List Item 1</li>\n\t <li>List Item 2</li>\n\t <li>List Item 3</li>\n\t <li>List Item 4</li>\n\t <li>List Item 5</li>\n\t <li>List Item 6</li>\n\t <li>List Item 7</li>\n\t <li>List Item 8</li>\n\t <li>List Item 9</li>\n\t <li>List Item 10</li>\n </ul>",
			"answers": [2, 4, 6, 8, 10]
		},
		{
			"id": 15,
			"question": "input[type=\"text\"] + span[style]",
			"code": "<form action=\"/save\">\n\t <label>Name:</label>\n\t <input type=\"text\" />\n\t <span>Please fill this field.</span>\n\n\t <label>Password:</label>\n\t <input type=\"password\" />\n\t <span>Please fill this field.</span>\n\n\t <label>Confirm Password:</label>\n\t <input type=\"password\" />\n\t <span style=\"display: block;\">Please fill this field.</span>\n\n\t <label>Email:</label>\n\t <input type=\"text\" />\n\t <span style=\"display: block;\">Please enter a valid email address.</span>\n\n\t <input type=\"submit\" value=\"Save\" />\n </form>",
			"answers": [16]
		}
	];

})(this);