require.config({
	paths: {
		'jquery':			'component/jquery/jquery',
		'jquery.cookie':	'component/jquery.cookie/jquery.cookie',
		'jquery.lazyload':	'component/jquery.lazyload/jquery.lazyload',
		'jquery.stellar':	'component/jquery.stellar/jquery.stellar',
		'jquery.uniform':	'component/jquery.uniform/jquery.uniform'
	},
	dir: 'build',
	shim: {
		'jquery.cookie':	['jquery'],
		'jquery.lazyload':	['jquery'],
		'jquery.stellar':	['jquery'],
		'jquery.uniform':	['jquery']
	},
	modules: [{
		name: 'main',
		include: ['main','app']
	}]
});