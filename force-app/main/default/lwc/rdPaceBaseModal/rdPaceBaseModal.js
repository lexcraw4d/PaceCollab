import { api,track } from 'lwc';
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
import createEntity from '@salesforce/apex/CreateBusinessEntity.createEntity'
   
export default class RdPaceBaseModal extends LightningModal {
//*Pass in dynamic information based off of what information you want to display in the modal from the parent component Business Entity Card*/
    @api result;
    @api headerText;
    @api bodyContent;
    @api saveBtn;
    @api saveAndProceedToLOIBtn;
    

    @track name = NAME_FIELD;
    @track street1 = STREET1_FIELD;
//TODO: Add in other fields dynamically
//Add in the result to the toast
//download extension
//TODO: Loading Spinner   
// TODO: Dynamically expose a field to make it available in the template 
fields = [NAME_FIELD, TAXID_FIELD, UID_FIELD, STREET1_FIELD, STREET2_FIELD, STREET3_FIELD, ZIP_FIELD, ACTIVEUEI_FIELD, NOUEI_FIELD];

rec = {
    Name : this.name,
    Street1: this.street1,
    Street2: this.street2,
    Street3: this.street3
 
}

//TODO: add toast event on success of record creation
  handleNameChange(event) {
      console.log('and the rec is', this.rec)
        this.rec.Name = event.target.value;
        console.log("name", this.rec.Name);
    }
  handleStreetChange1(event){
        this.rec.Street1 = event.target.value;
        console.log('street one', this.rec.Street1);
    }
    handleStreetChange2(event){
        this.rec.Street2 = event.target.value;
        console.log('street two', this.rec.Street2);
    }
    handleStreetChange3(event){
        this.rec.Street3 = event.target.value;
        console.log('street three', this.rec.Street3);
    }
    handleSubmit(event) {
        createEntity({ business : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Name = '';
                    this.rec.Street1 = '';
                    this.rec.Street2 = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Business created Succesfully!',
                            variant: 'success',
                        }),
                    );
                }
                this.close(result)
                console.log('resulllllt', this.message.Id)
              
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