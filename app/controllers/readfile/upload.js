import Ember from 'ember';

export default Ember.Controller.extend({
    fileData: null,
    fileContent: Ember.computed('fileData', function() {
    	// console.log("value", this.get('fileData'))
        return this.get('fileData');
    })
});
