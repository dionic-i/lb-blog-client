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

			let blog = yield select(state => {
				return state.blogs.list.find((item) => item.id == id)
			});

			// Если блога нет, то вытащим его с сервера.
			if (!blog) {
				const data = yield call(findById, payload.id);
				blog = data.data;
			}

			yield put({type: 'show', payload: {id, blog, list: articles.data}});
		},
	},

	reducers: {
		show(state, action) {
			return {...state, ...action.payload};
		},
	},

};
