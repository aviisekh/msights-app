import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        getFile: function(a) {
            console.log(a.files);
        }
    }
});
