const Mock = require('mockjs');
const blogs = require('./common').blogs;
const articles = require('./common').articles;
const _ = require('lodash');

function filter(data, query) {
	let filter;
	if (query.filter) {
		filter = JSON.parse(query.filter);
	}
	const {order, limit} = filter;
	return limit ? _.slice(data, 0, limit) : data;
}

module.exports = {
	[`GET /api/blogs`] (req, res) {
		res.status(200).json(filter(blogs, req.query));
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

		res.status(200).json(filter(result, req.query));
	},

};
