import Ember from 'ember';

export default Ember.Route.extend({
	tagName:'input',

	actions:{
		getFile: function(){
			console.log("here");
		}
	}
});
