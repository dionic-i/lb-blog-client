import pathToRegexp from 'path-to-regexp'
import {findOne} from '../services/articles';

export default {

	namespace: 'article',

	state: {
		item: {
			id     : 0,
			title  : '',
			except : '',
			body   : '',
			blog_id: 0
		}
	},

	subscriptions: {
		setup ({dispatch, history}) {
			history.listen(({pathname}) => {
				const match = pathToRegexp('/article/:id').exec(pathname);
				if (match) {
					dispatch({type: 'fetch', payload: {id: match[1]}})
				}
			})
		},
	},

	effects: {
		*fetch({payload}, {call, put}) {
			const item = yield call(findOne, payload.id);
			yield put({type: 'show', payload: {item: item}});
		},
	},

	reducers: {
		show(state, action) {
			return {...state, ...action.payload};
		},
	},

};
