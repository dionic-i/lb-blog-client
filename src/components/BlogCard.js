import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

function BlogCard({id, title, description}) {
	return (
		<div>
			<Card title={title} extra={<Link to={`blog/${id}`}>Подробнее</Link>}>
				{description}
			</Card>
		</div>
	);
}

BlogCard.propTypes = {
	id         : PropTypes.number,
	title      : PropTypes.string,
	description: PropTypes.string,
};

export default BlogCard;
