import Ember from 'ember';
import FileReaderMixin from "../mixins/file-reader";

export default Ember.Component.extend(FileReaderMixin, {
    tagName: 'input',
    type: 'file',
    accept: ".txt, .csv",
    attributeBindings: ['type', 'accept', 'type'],

    addChangeListenerToElement: Ember.on('didInsertElement', function() {
        let input = this.$()[0];

        input.onchange = (event) => {
            let file = event.target.files[0];
            this.readFile(file, (fileContents) => {
                this.set('fileDataValue', fileContents);
            });
        };
    })
});
