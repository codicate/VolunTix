module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			// Required for expo-router
			'expo-router/babel',
			// {
			// 	alias: {
			// 		'#app': './app',
			// 		'#assets': './assets',
			// 		'#components': './components',
			// 		'#configs': './configs',
			// 		'#constants': './constants',
			// 		'#hooks': './hooks',
			// 		'#screens': './screens',
			// 		'#stacks': './stacks',
			// 	},
			// },
		],
	};
};
