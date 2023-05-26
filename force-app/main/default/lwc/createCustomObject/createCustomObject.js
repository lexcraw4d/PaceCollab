import { LightningElement, track } from 'lwc';
import createCustomObjectRecord from '@salesforce/apex/CustomObjectController.createCustomObjectRecord';
export default class CustomObjectCreation extends LightningElement {
    @track name;
    @track description;
    handleNameChange(event) {
        this.name = event.target.value;
    }
    handleDescriptionChange(event) {
        this.description = event.target.value;
    }
    createRecord() {
        createCustomObjectRecord({ name: this.name, description: this.description })
            .then(result => {
                // Handle successful record creation
                console.log('Record created successfully:', result);
            })
            .catch(error => {
                // Handle error
                console.error('Error creating record:', error);
            });
    }
}