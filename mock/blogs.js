const Mock = require('mockjs');
const blogs = require('./common').blogs;
const articles = require('./common').articles;

module.exports = {
	[`GET /api/blogs`] (req, res) {
		res.status(200).json(blogs);
	},

	[`GET /api/blogs/:id`] (req, res) {
		const id = req.params.id;

		let result = null;
		if (id) {
			result = blogs.find((item) => item.id == id);
		}

		res.status(200).json(result);
	},

	[`GET /api/blogs/:id/articles`] (req, res) {
		const id = req.params.id;

		let result = [];
		if (id) {
			result = articles.filter((item) => item.blog_id == id);
		}

		res.status(200).json(result);
	},

};
