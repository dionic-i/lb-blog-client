import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import {Link} from 'react-router-dom';

function MainArticlesList({items, blogId}) {
	const message = (blogId === 0)
		? 'Выберите блог для отображеният статей!'
		: 'На данный момент в текущем блоге нет ни одной статьи!';

	const view = items.length
		? <List
			itemLayout="horizontal"
			dataSource={items}
			renderItem={item => (
				<List.Item>
					<List.Item.Meta
						title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
						description={item.except}
					/>
				</List.Item>
			)}
		/>
		: <h4>{message}</h4>;

	return (
		<div>
			{view}
		</div>
	);
}

MainArticlesList.propTypes = {
	items: PropTypes.array,
	blogId: PropTypes.number
};

export default MainArticlesList;
