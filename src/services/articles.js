import request from '../utils/request';

export async function findOne(id) {
	return request(`/api/articles/${id}`);
}
