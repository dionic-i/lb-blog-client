/* global window */
import axios from 'axios';
import lodash from 'lodash';
import Cookies from 'js-cookie';

export default function request(options) {
	const token = Cookies.get('authorized');

	if (token) {
		options = lodash.extend(options, {
			headers: {
				'authorized': token
			},
			params : lodash.extend(options.params || {}, {
				access_token: token
			})
		});
	}

	return axios.request(options).then((response) => {
		const {statusText, status} = response;
		let data = response.data;
		if (data instanceof Array) {
			data = {
				list: data,
			}
		}

		return Promise.resolve({
			success   : true,
			message   : statusText,
			statusCode: status,
			...data,
		});
	}).catch((error) => {
		const {response} = error;
		let msg;
		let statusCode;
		if (response && response instanceof Object) {
			const {data, statusText} = response;
			statusCode = response.status;
			msg = data.message || statusText
		} else {
			statusCode = 600;
			msg = error.message || 'Network Error';
		}
		return Promise.reject({success: false, statusCode, message: msg})
	})
}
