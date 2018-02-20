import React from 'react';
import {connect} from 'dva';
import {withRouter} from 'dva/router';
import {Layout} from 'antd'
import MyMenu from './Menu';

const {Header, Content, Footer} = Layout;

function MyLayout({children, dispatch, app}) {
	return (
		<div>
			<Layout>
				<Layout style={{height: '100vh', overflow: 'scroll'}} id="mainContainer">
					<Header style={{position: 'fixed', width: '100%', height: '44px', zIndex: 999}}>
						<MyMenu/>
					</Header>
					<Content style={{margin: '50px'}}>
						{children}
					</Content>
					<Footer>
						<h3 style={{textAlign: 'center'}}>Найди свой любимый блог!</h3>
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
}

MyLayout.propTypes = {};

export default withRouter(connect((app) => ({app}))(MyLayout));
