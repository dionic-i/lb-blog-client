import pathToRegexp from 'path-to-regexp';
import {query} from '../services/blogs';

export default {

	namespace: 'blogs',

	state: {
		list: []
	},

	subscriptions: {
		setup ({dispatch, history}) {
			history.listen(({pathname}) => {
				const match = pathToRegexp('/blogs').exec(pathname);
				if (match) {
					dispatch({type: 'fetch'})
				}
			})
		},
	},

	effects: {
		*fetch({payload}, {call, put}) {
			const blogs = yield call(query);
			yield put({type: 'show', payload: {list: blogs.data}});
		},
	},

	reducers: {
		show(state, action) {
			return {...state, ...action.payload};
		},
	},

};
