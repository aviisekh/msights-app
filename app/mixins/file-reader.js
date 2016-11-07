import Ember from 'ember';

export default Ember.Mixin.create({
    readFile(file, callBack) {
        let reader = new FileReader();
        // let fileName = file.name;
        // console.log(file.type);

        reader.onload = () => {
            let text = reader.result;
            let header = text.split('\n')[0].split(',');
            let records = text.split('\n').slice(1);
            let recordsArraySplitted = [];
            for (let record in records) {
                recordsArraySplitted.push(records[record]);
            }
            callBack( {
                file: file,
                contents: text,
                header: header,
                records: records
            });
        };

        reader.readAsText(file);

       
    }




});
