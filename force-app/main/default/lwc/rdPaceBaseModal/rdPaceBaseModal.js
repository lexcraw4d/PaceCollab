import { api,track } from 'lwc';
import LightningModal from 'lightning/modal';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import BUSINESS_OBJECT from '@salesforce/schema/RD_PACE_Business_Entity_Card__c';
import NAME_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.Name';
import TAXID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_TaxIdentificationNumber__c';
import UID_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_UniqueIdentificationNumber__c';
import STREET1_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street1__c';
import STREET2_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street2__c';
import STREET3_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Street3__c';
import ZIP_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_Zip__c';
import ACTIVEUEI_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_ActiveUEI__c';
import NOUEI_FIELD from '@salesforce/schema/RD_PACE_Business_Entity_Card__c.RD_PACE_NoUEI__c';
import createEntity from '@salesforce/apex/CreateBusinessEntity.createEntity'
   
export default class RdPaceBaseModal extends LightningModal {
//*Pass in dynamic information based off of what information you want to display in the modal from the parent component Business Entity Card*/
    @api result;
    @api headerText;
    @api bodyContent;
    @api saveBtn;
    @api saveAndProceedToLOIBtn;
    @api BUSINESS_OBJECT;

    @track name;
    @track street1;
    @track street2;
    @track street3;
//TODO: Add in other fields dynamically
//Add in the result to the toast
//download extension
//TODO: Loading Spinner   
// TODO: Dynamically expose a field to make it available in the template 
fields = [NAME_FIELD, TAXID_FIELD, UID_FIELD, STREET1_FIELD, STREET2_FIELD, STREET3_FIELD, ZIP_FIELD, ACTIVEUEI_FIELD, NOUEI_FIELD];


//TODO: add toast event on success of record creation
  handleNameChange(event) {
   
        this.name = event.target.value;
        console.log("name", this.name);
    }
  handleStreetChange1(event){
        this.street1 = event.target.value;
        console.log('street one', this.street1);
    }
   
  handleStreetChange2(event){
        this.street2 = event.target.value;
        console.log('street two', this.street2);
    }
   
  handleStreetChange3(event){
        this.street3 = event.target.value;
        console.log('street three', this.street3);
    }
   
    handleSubmit(event) {
        createEntity({ name : this.name, street1: this.street1, street2: this.street2, street3: this.street3 })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.name = '';
              
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Business created Succesfully!',
                            variant: 'success',
                        }),
                    );
                }
                this.close(result)
                console.log('result Id', this.message.Id)
              
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Failed to Insert record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            })
        }

}