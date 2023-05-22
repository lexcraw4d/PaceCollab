import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.Name';
import TAXID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_TaxIdentificationNumber__c';
import UID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_UniqueIdentificationNumber__c';
import STREET1_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street1__c';
import STREET2_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street2__c';
import STREET3_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street3__c';
import ZIP_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Zip__c';
import ACTIVEUEI_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_ActiveUEI__c';
import NOUEI_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_NoUEI__c';

   
export default class RdPaceBaseModal extends LightningModal {
//*Pass in dynamic information based off of what information you want to display in the modal from the parent component Business Entity Card*/
    @api result;
    @api headerText;
    @api bodyContent;
    @api saveBtn;
    @api saveAndProceedToLOIBtn;

//TODO: Loading Spinner   
// TODO: Dynamically expose a field to make it available in the template 
fields = [NAME_FIELD, TAXID_FIELD, UID_FIELD, STREET1_FIELD, STREET2_FIELD, STREET3_FIELD, ZIP_FIELD, ACTIVEUEI_FIELD, NOUEI_FIELD];

//TODO: add toast event on success of record creation

    handleSubmit() {
        this.template.querySelector('lightning-record-edit-form').submit();
    }

    handleSuccess(event) {

        const toastEvent = 
        new ShowToastEvent({ title:'Business has been created successfully!', 
        message: 'Business Created: '+ event.detail.id, 
        varient:'Success' });
        this.dispatchEvent(toastEvent);

        const createBusinessEntityRecord = event.detail.id;
        console.log('onsuccess: ', createBusinessEntityRecord);
        this.close(createBusinessEntityRecord);
    }

    options = [
        { label: 'is an existing RUS borrower', value: 'option1' },
        { label: 'is a former RUS or REA borrower', value: 'option2' },
        { label: 'has never been a RUS or REA borrower', value: 'option3' },
    ];

    // Select option1 by default
    value = 'option1';
    options2 = [
        { label: 'Yes', value: 'option1' },
        { label: 'No', value: 'option2' },
    ];

    // Select option1 by default
    value = ['option1'];

    handleChange2(event) {
        const changeValue = event.detail.value;
        console.log(changeValue);
    }
    handleChange(event) {
        const selectedOption = event.detail.value;
        console.log('Option selected with value: ' + selectedOption);
    }

}