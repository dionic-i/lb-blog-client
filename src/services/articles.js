import request from '../utils/request';
import config from '../utils/config';
import _ from 'lodash';

const {apiPrefix} = config;
const {articleUrl} = config[apiPrefix];

export async function findOne(id) {
	const url = _.replace(articleUrl, '{id}', id);
	return request({
		url   : url,
		method: 'get'
	});
}
