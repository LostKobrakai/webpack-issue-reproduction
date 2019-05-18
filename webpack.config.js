const path = require('path');

module.exports = function (env, options) {
	const clientConfig = {
		entry: './js/app.js',
		output: {
			filename: 'app.js',
			path: path.resolve(__dirname, 'public/js')
		},
		module: {
			rules: []
		}
	}

	const serverConfig = {
		target: 'node',
		entry: './js/server.js',
		output: {
			filename: 'test.js',
			path: path.resolve(__dirname, 'backend/'),
			libraryTarget: "commonjs2",
		},
		module: {
			rules: []
		}
	}

	//return clientConfig;
	return [clientConfig, serverConfig];
};
