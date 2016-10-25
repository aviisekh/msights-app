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
                // this.sendAction('handleFileAsDataURL', fileName, event.target.result);
                var text = reader.result;
                var header = text.split('\n')[0];
                // var fields = header.split(',');
                this.set('value',{
                    text:text,
                    header:header
                });
                // this.set('content', text);
                // this.set('header', header);
                // this.set('fields', fields);
                // console.log(header);
                // console.log(fields);
            };

            reader.readAsText(file);
        };
    })
});
