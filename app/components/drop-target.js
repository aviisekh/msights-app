import Ember from 'ember';
import FileReaderMixin from "../mixins/file-reader";

export default Ember.Component.extend(FileReaderMixin, {
    classNameBindings: ['uploadDropZone', 'drops'],
    uploadDropZone: true,
    drops: false,

    dragOver: function() {
        this.set('drops', true);
        return false;
    },

    dragLeave: function() {
        this.set('drops', false);
        return false;
    },

    drop: function(event) {
        event.preventDefault();
        let file = event.dataTransfer.files[0];
        this.readFile(file, (fileContents) => {
            this.set('fileDataValue', fileContents);
        });
    }
});
