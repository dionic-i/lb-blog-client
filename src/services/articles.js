import request from '../utils/request';

export async function findOne(id) {
	return request({
		url   : `/api/articles/${id}`,
		method: 'get'
	});
}
