(function (root) {
	require(["config"], function(config){
		requirejs.config(config);
		require(["App"], function(App){
			var app_name = config.app_name || "App";
			root[app_name] = App;
		});
	});
	//this es el windows que pasa como parametro al root
})(this);