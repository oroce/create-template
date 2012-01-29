define([
	"jquery",
	"underscore",
	"backbone",
	"models/app"
], function( $, _, Backbone, AppModel ){
	
	var AppCollection = Backbone.Collection.extend({

		model: AppModel

	});
	
	return AppCollection;

});
