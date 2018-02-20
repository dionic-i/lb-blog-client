import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import {Link} from 'react-router-dom';

function ArticlesList({items}) {

	const view = items.length
		? <List
			itemLayout="horizontal"
			dataSource={items}
			renderItem={item => (
				<List.Item actions={[<Link to={`/article/${item.id}`}>Подробнее</Link>]}>
					<List.Item.Meta
						title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
						description={item.except}
					/>
				</List.Item>
			)}
		/>
		: <h2>На данный момент в этом блоге нет ни одной статьи!</h2>;

	return (
		<div>
			{view}
		</div>
	);
}

ArticlesList.propTypes = {
	items: PropTypes.array
};

export default ArticlesList;
