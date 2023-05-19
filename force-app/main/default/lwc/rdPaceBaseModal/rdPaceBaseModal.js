import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class RdPaceBaseModal extends LightningModal {
    //Pass in dynamic information based off of what information you want to display in your modal from the parent component
    @api result;
    @api headerText;
    @api bodyContent;
    @api saveBtn;
    @api saveAndProceedToLOIBtn;

    handleSave() {
        this.close('modal was saved');
    }
}