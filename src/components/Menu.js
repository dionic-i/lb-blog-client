import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'dva';
import {Menu} from 'antd';

class MyMenu extends Component {

	render() {
		let me = this;
		return (
			<div>
				<Menu
					theme="dark"
					mode="horizontal"
					selectedKeys={[me.props.menu.key]}
					style={{lineHeight: '44px'}}
				>
					<Menu.Item key="main">
						<NavLink activeClassName="active" to="/">Главная</NavLink>
					</Menu.Item>
					<Menu.Item key="blogs">
						<NavLink activeClassName="active" to="/blogs">Блоги</NavLink>
					</Menu.Item>
				</Menu>
			</div>
		);
	}

}

MyMenu.propTypes = {};

export default connect(({menu}) => ({menu}))(MyMenu);
