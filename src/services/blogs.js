import request from '../utils/request';

export async function query(filter) {
	const fOptions = filter || {};
	return request({
		url   : '/api/blogs',
		method: 'get',
		params: {
			filter: JSON.stringify(fOptions)
		}
	});
}

export async function findById(id) {
	return request({
		url   : `/api/blogs/${id}`,
		method: 'get'
	});
}

export async function blogArticles(id, filter) {
	const fOptions = filter || {};
	return request({
		url   : `/api/blogs/${id}/articles`,
		method: 'get',
		params: {
			filter: JSON.stringify(fOptions)
		}
	});
}
