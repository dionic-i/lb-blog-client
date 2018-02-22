import pathToRegexp from 'path-to-regexp'
import {query, blogArticles} from '../services/blogs';

export default {

	namespace: 'dashboard',

	state: {
		blogId: 0,
		blogs:[],
		articles: []
	},

	subscriptions: {
		setup ({dispatch, history}) {
			history.listen(({pathname}) => {
				const match = pathToRegexp('/').exec(pathname);
				if (match) {
					dispatch({type: 'fetch'})
				}
			})
		},
	},

	effects: {
		*fetch({payload}, {call, put}) {
			const filter = {
				order: 'id DESC',
				limit: 5
			};
			const {list} = yield call(query, filter);
			yield put({type: 'updateState', payload: {blogs: list}});
		},

		*fetchArticles({payload}, {call, put}) {
			const filter = {
				order: 'votes DESC',
				limit: 5
			};

			const {list} = yield call(blogArticles, payload.id, filter);

			yield put({type: 'updateState', payload: {articles: list}});
		},

	},

	reducers: {
		updateState(state, action) {
			return {...state, ...action.payload};
		},

		selectBlog(state, action) {
			const {id: blogId} = action.payload;
			return {...state, blogId};
		},
	},

};
