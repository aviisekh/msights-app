import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'input',
    type: 'file',
    attributeBindings: ['type'],

    addChangeListenerToElement: Ember.on('didInsertElement', function() {
        let input = this.$()[0];

        input.onchange = (event) => {
            let file = event.target.files[0];
            let reader = new FileReader();
            let fileName = file.name;

            reader.onload = (event) => {
                let text = reader.result;
                let header = text.split('\n')[0];
                this.set('fileDataValue', {
                    file: file,
                    contents: text,
                    header: header
                });
            };

            reader.readAsText(file);
        };
    })
});
