import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.Name';
import TAXID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_TaxIdentificationNumber__c';
import UID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_UniqueIdentificationNumber__c'

   
export default class RdPaceBaseModal extends LightningModal {
//*Pass in dynamic information based off of what information you want to display in the modal from the parent component Business Entity Card*/
    @api result;
    @api headerText;
    @api bodyContent;
    @api saveBtn;
    @api saveAndProceedToLOIBtn;

//TODO: Loading Spinner   
// TODO: Dynamically expose a field to make it available in the template 
fields = [NAME_FIELD, TAXID_FIELD, UID_FIELD];

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

}