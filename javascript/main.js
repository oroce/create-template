define([
	"backbone",
	"routers/app"
], function( AppRouter ){
	window.App = window.App || {}
	window.App.routers = {
		main: new AppRouter()
	}
	Backbone.History.start()
});
