import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';


function IndexPage() {
	return (
		<div>
			<h1>Главная страница</h1>
			<Row gutter={8}>
				<Col span="12">
					<h2>Список блогов</h2>
				</Col>

				<Col span="12">
					<h2>Список статей</h2>
				</Col>
			</Row>
		</div>
	);
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
