export default {

	namespace: 'menu',

	state: {
		current: 'main',
	},

	subscriptions: {
		setup ({dispatch, history}) {
			history.listen(({pathname}) => {
				let key = '';
				if (pathname === '/') {
					key = 'main';
				}
				else if (pathname === '/blogs') {
					key = 'blogs';
				}
				dispatch({type: 'setCurrent', payload: {key}})
			})
		},
	},

	reducers: {
		setCurrent(state, action) {
			return {...state, ...action.payload};
		},
	},

};
