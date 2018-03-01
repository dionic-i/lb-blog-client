const APIV1 = '/api';

const config = {
	name: 'Our blog',

	apiPrefix: 'api_lp',

	api: {
		userLoginUrl   : `${APIV1}/user/login`,
		userLogoutUrl  : `${APIV1}/user/logout`,
		statusUrl      : `${APIV1}/status`,
		blogsUrl       : `${APIV1}/blogs`,
		blogByIdUrl    : `${APIV1}/blogs/{id}`,
		blogArticlesUrl: `${APIV1}/blogs/{id}/articles`,
		articleUrl     : `${APIV1}/articles/{id}`,
	},

	api_lp: {
		userLoginUrl   : `${APIV1}/Users/login`,
		userLogoutUrl  : `${APIV1}/Users/logout`,
		statusUrl      : `${APIV1}/Apps/status`,
		blogsUrl       : `${APIV1}/Blogs`,
		blogByIdUrl    : `${APIV1}/Blogs/{id}`,
		blogArticlesUrl: `${APIV1}/Blogs/{id}/Articles`,
		articleUrl     : `${APIV1}/Articles/{id}`,
	},
};

export default config;
