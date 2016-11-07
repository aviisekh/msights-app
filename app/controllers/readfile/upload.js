import Ember from 'ember';

export default Ember.Controller.extend({
    fileData: null,
    dataHeader: Ember.computed('fileData', function() {
    	// console.log("value", this.get('fileData'))
        return this.get('fileData.header');
    }),
    dataRecords: Ember.computed('fileData', function() {
        console.log("value", this.get('fileData.records'));
        // return this.get('fileData.records');
    }),
});
