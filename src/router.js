import React from 'react';
import {Switch, Route, routerRedux} from 'dva/router'

import IndexPage from './routes/IndexPage';
import MyLayout from './components/Layout';

import BlogPage from './routes/BlogPage';
import BlogsPage from './routes/BlogsPage';
import ArticlePage from './routes/ArticlePage';
import ErrorPage from './routes/ErrorPage';

const {ConnectedRouter} = routerRedux;

function RouterConfig({history, app}) {

	return (
		<ConnectedRouter history={history}>
			<MyLayout>
				<Switch>
					<Route path="/" exact component={IndexPage}/>
					<Route path="/blogs" exact component={BlogsPage}/>
					<Route path="/blog/:id" exact component={BlogPage}/>
					<Route path="/article/:id" exact component={ArticlePage}/>
					<Route component={ErrorPage}/>
				</Switch>
			</MyLayout>
		</ConnectedRouter>
	);
}

export default RouterConfig;
