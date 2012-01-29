define([
	"jquery",
	"underscore",
	"backbone",
	"jade!templates/app"
], function( $, _, Backbone, appTemplate ){

	var AppView = Backbone.View.extend({
		
		el: "#container",

		initialize: function(){

			_.bindAll( this, "render" );

			this.collection.bind( "reset", this.render );		

		},

		render: function(){

			$( this.el ).html( appTemplate( this.collection.toJSON() );

			return this;
		}
	});

	return AppView;
})
