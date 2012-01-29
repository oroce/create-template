define([
	"jquery",
	"underscore",
	"backbone",
	"collections/app",
	"views/app"
], function( $, _, Backbone, AppCollection, AppView ){
	
	var AppRouter = Backbone.Router.extend({
		route: {
			"": "home"
		},

		initialize: function(){
			_.bindAll( this, "home" );
		},

		home: function(){
		
			var appCollection = new AppCollection();

			new AppView({
				collection: appCollection
			}); 

			appCollection.fetch();
	
		}
	})
	
	return AppRouter;
	
});
