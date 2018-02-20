import request from '../utils/request';

export async function query() {
	return request('/api/blogs');
}

export async function findById(id) {
	return request(`/api/blogs/${id}`);
}

export async function blogArticles(id) {
	return request(`/api/blogs/${id}/articles`);
}
