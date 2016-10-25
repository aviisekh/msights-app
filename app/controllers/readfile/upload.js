import Ember from 'ember';

export default Ember.Controller.extend({
    // actions: {
    //     getFile: function(input) {
    //         // console.log(input.files[0]);
    //         console.log(input);
    //         if (input.files && input.files[0]) {
    //             let reader = new FileReader();

    //             reader.onload = ()=>{
    //             	var text = reader.result;
    //             	var header = text.split('\n')[0];
    //             	var fields = header.split(',');
    //             	this.set('content',text);
    //             	this.set('header',header);
    //             	this.set('fields',fields);
    //             	// console.log(header);
    //             	// console.log(fields);
    //             }
    //             reader.readAsText(input.files[0]);
    //         }

    //     }
    // },
    fileData: null,
    fileContent: Ember.computed('fileData', function() {
    	console.log("value", this.get('fileData'))
        return this.get('fileData');
    })
});
