import pathToRegexp from 'path-to-regexp';
import {blogArticles} from '../services/blogs';
import {findById} from '../services/blogs';

export default {

	namespace: 'blog',

	state: {
		id  : 0,
		blog: {
			id         : 0,
			title      : '',
			description: ''
		},
		list: []
	},

	subscriptions: {
		setup ({dispatch, history}) {
			history.listen(({pathname}) => {
				const match = pathToRegexp('/blog/:id').exec(pathname);
				if (match) {
					dispatch({type: 'fetch', payload: {id: match[1]}})
				}
			})
		},
	},

	effects: {
		*fetch({payload}, {call, select, put}) {
			const {id} = payload;
			const articles = yield call(blogArticles, payload.id);
			const {list} = articles;

			const data = yield call(findById, payload.id);
			const blog = {
				id: data.id,
				title: data.title,
				description: data.description,
			};

			yield put({type: 'show', payload: {id, blog, list}});
		},
	},

	reducers: {
		show(state, action) {
			return {...state, ...action.payload};
		},
	},

};
