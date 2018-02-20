import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import ArticleList from '../components/ArticlesList';

function BlogPage({blog}) {
	return (
		<div>
			<h1>Страница блога: {blog.blog.title}</h1>
			<ArticleList items={blog.list} />
		</div>
	);
}

BlogPage.propTypes = {};

export default connect(({blog}) => ({blog}))(BlogPage);
