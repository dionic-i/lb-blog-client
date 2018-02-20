import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard';
import {List} from 'antd';

function BlogsList({items}) {

	const view = items.length
		? <List
			grid={{gutter: 8, xs: 1, sm: 2}}
			dataSource={items}
			renderItem={item => (
				<List.Item>
					<BlogCard {...item} />
				</List.Item>
			)}
		/>
		: <h2>На данный момент не заведено ни одного блога!</h2>;

	return (
		<div>
			{view}
		</div>
	);
}

BlogsList.propTypes = {
	items: PropTypes.array
};

export default BlogsList;
