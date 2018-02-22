import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Icon} from 'antd';
import {Link} from 'react-router-dom';

class MainBlogsList extends Component {

	render() {
		let me = this;

		const {items} = me.props;

		const view = items.length
			? <List className="main-list"
			        itemLayout="horizontal"
			        dataSource={items}
			        renderItem={item => (
				        <div onClick={() => me.onSelectItem(item)}>
					        <List.Item extra={me.getExtraContent(item)}>
						        <List.Item.Meta
							        title={<Link to={`/blog/${item.id}`}>{item.title}</Link>}
							        description={item.description}
						        />

					        </List.Item>
				        </div>
			        )}
			/>
			: <h4>На данный момент не заведено ни одного блога!</h4>;

		return (
			<div>
				{view}
			</div>
		);
	}

	onSelectItem = (item) => {
		let me = this;
		const {selectBlog} = me.props;
		selectBlog(item);
	};

	getExtraContent = (item) => {
		let me = this;
		const {blogId} = me.props;
		return item.id === blogId ? <Icon type="check" />: '';
	};

}

MainBlogsList.propTypes = {
	items: PropTypes.array,
	blogId: PropTypes.number,
	selectBlog: PropTypes.func
};

export default MainBlogsList;
