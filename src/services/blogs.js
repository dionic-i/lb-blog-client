import request from '../utils/request';
import config from '../utils/config';
import _ from 'lodash';

const {apiPrefix} = config;
const {blogsUrl, blogByIdUrl, blogArticlesUrl} = config[apiPrefix];

export async function query(filter) {
	const fOptions = filter || {};
	return request({
		url   : blogsUrl,
		method: 'get',
		params: {
			filter: JSON.stringify(fOptions)
		}
	});
}

export async function findById(id) {
	const url = _.replace(blogByIdUrl, '{id}', id);
	return request({
		url   : url,
		method: 'get'
	});
}

export async function blogArticles(id, filter) {
	const fOptions = filter || {};
	const url = _.replace(blogArticlesUrl, '{id}', id);
	return request({
		url   : url,
		method: 'get',
		params: {
			filter: JSON.stringify(fOptions)
		}
	});
}
