import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.Name';
import TAXID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_TaxIdentificationNumber__c';
import UID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_UniqueIdentificationNumber__c'
export default class RdPaceBusinessEntityForm extends LightningElement {
        // Expose a field to make it available in the template
        fields = [NAME_FIELD, TAXID_FIELD, UID_FIELD];
   
        // Flexipage provides recordId and objectApiName
        @api recordId;
        @api objectApiName;
     
    


}