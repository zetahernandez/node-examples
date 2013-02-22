define({
	app_name: "Example",
	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'ember_data': {
			deps: ['ember'],
			exports: 'DS'
		}
	},
	paths: {
		'App': 'application',
		// 'models': 'app/models',
		// 'views': 'app/views',
		// 'router': 'app/views',
		// 'controllers': 'app/controllers',
		// 'templates': 'app/templates',
		/* libs */
		'jquery': 'libs/jquery',
		'handlebars': 'libs/handlebars',
		'ember': 'libs/ember',
		'ember_data': 'libs/ember-data'
	}
});