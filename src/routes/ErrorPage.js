import React from 'react';
import {connect} from 'dva';

function ErrorPage() {
	return (
		<div><h1>Ошибка 404</h1></div>
	);
}

ErrorPage.propTypes = {};

export default connect()(ErrorPage);
