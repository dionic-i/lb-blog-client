import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';

function ArticlePage({article}) {
	const {item} = article;
	return (
		<div>
			<h1>Статья: {item.title}</h1>
			<p>{item.body}</p>
			<ul>
				<li><Link to="/">На главную</Link></li>
				<li><Link to={`/blog/${item.blog_id}`}>На блог</Link></li>
			</ul>
		</div>
	);
}

ArticlePage.propTypes = {};

export default connect(({article}) => ({article}))(ArticlePage);
