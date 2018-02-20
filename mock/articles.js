const Mock = require('mockjs');
const articles = require('./common').articles;

module.exports = {
	[`GET /api/articles`] (req, res) {
		res.json(articles);
	},

	[`GET /api/articles/:id`] (req, res) {
		const id = req.params.id;

		let result = null;
		if (id) {
			result = articles.find((item) => item.id == id);
		}

		res.status(200).json(result);
	},

};
