import React from 'react';
import {connect} from 'dva';
import BlogList from '../components/BlogsList';

function BlogsPage({blogs}) {
	return (
		<div>
			<h1>Список блогов</h1>
			<BlogList items={blogs.list} />
		</div>
	);
}

BlogsPage.propTypes = {};

export default connect(({blogs}) => ({blogs}))(BlogsPage);
