const Mock = require('mockjs');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

let blogId = 1;
const blogs = Mock.mock({
	'data|20': [
		{
			id () {
				blogId += 1;
				return blogId;
			},
			title      : '@title(2, 3)',
			description: '@sentence(3, 5)'
		},
	],
}).data;


const articles = Mock.mock({
	'data|200': [
		{
			id () {
				blogId += 1;
				return blogId;
			},
			title : '@title(2, 4)',
			except: '@sentence(3, 5)',
			body  : '@paragraph(2)',
			blog_id () {
				return getRandomInt(1, 20)
			}
		},
	],
}).data;

module.exports = {
	blogs,
	articles
};
