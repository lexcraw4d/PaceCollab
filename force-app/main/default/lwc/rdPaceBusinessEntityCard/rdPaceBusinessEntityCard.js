
import { LightningElement, api } from 'lwc';
import rdPaceBaseModal from 'c/rdPaceBaseModal';


export default class rdPaceBusinessEntityCard extends LightningElement {
    result;
    async handleClick(){
        const result = await rdPaceBaseModal.open({
            size: 'Medium',
            description: 'This is a modal popup.',
            headerText: 'Create a Business Entity',
            bodyContent: 'Form for business entity/fields to go here',
            saveAndProceedToLOIBtn: 'Save and continue to LOI',
            saveBtn: 'Save'
        });

    this.result = result;
    console.log('this.result', this.result) 
        
    }
}