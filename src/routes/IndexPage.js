import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import PropTypes from 'prop-types';

import MainBlogsList from '../components/MainBlogsList';
import MainArticlesList from '../components/MainArticlesList';

function IndexPage({dashboard, dispatch}) {

	const {blogs, articles, blogId} = dashboard;

	const onSelectBlog = function (item) {
		dispatch({type: 'dashboard/selectBlog', payload: item});
		dispatch({type: 'dashboard/fetchArticles', payload: {id: item.id}});
	};

	return (
		<div>
			<h1>Главная страница</h1>
			<Row gutter={8}>
				<Col span="12">
					<h2>Последние блоги</h2>
					<MainBlogsList items={blogs} blogId={blogId} selectBlog={onSelectBlog}/>
				</Col>

				<Col span="12">
					<h2>Лучшие статьи</h2>
					<MainArticlesList items={articles} blogId={blogId} />
				</Col>
			</Row>
		</div>
	);
}

IndexPage.propTypes = {
	blogs   : PropTypes.array,
	articles: PropTypes.array,
};

export default connect(({dashboard}) => ({dashboard}))(IndexPage);
