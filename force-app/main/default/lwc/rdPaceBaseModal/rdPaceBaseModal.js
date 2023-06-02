import { api,track } from 'lwc';
import LightningModal from 'lightning/modal';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import createEntity from '@salesforce/apex/CreateBusinessEntity.createEntity'

export default class RdPaceBaseModal extends LightningModal {
    @track rec = {
        Name: "", 
        Street1: "",
        Street2: "",
        Street3: "",
        City: "",
        Zip:"",
        State: "",
        TaxId: "",
        UeiIdentifier: "",
        UeiId: "",
        NoUeiExplaination: "",
        EligibilityOptions: "",
        IsNotForProfit: ""

    };

// Finish adding uei to the business entity tomorrow and the remaining fields makee sure they connect to the Apex controller and the database 
    options = [
        { label: 'Alabama', value: 'AL' },
        { label: 'Alaska', value: 'AK' },
        { label: 'Arizona', value: 'AZ' },
        { label: 'Arkansas', value: 'AR' },
        { label: 'California', value: 'CA' },
        { label: 'Colorado', value: 'CO' },
        { label: 'Connecticut', value: 'CT' },
        { label: 'Delaware', value: 'DE' },
        { label: 'Florida', value: 'FL' },
        { label: 'Georgia', value: 'GA' },
        { label: 'Hawaii', value: 'HI' },
        { label: 'Idaho', value: 'ID' },
        { label: 'Illinois', value: 'IL' },
        { label: 'Indiana', value: 'IN' },
        { label: 'Iowa', value: 'IA' },
        { label: 'Kansas', value: 'KS' },
        { label: 'Kentucky', value: 'KY' },
        { label: 'Louisiana', value: 'LA' },
        { label: 'Maine', value: 'ME' },
        { label: 'Maryland', value: 'MD' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'Michigan', value: 'MI' },
        { label: 'Minnesota', value: 'MN' },
        { label: 'Mississippi', value: 'MS' },
        { label: 'Missouri', value: 'MO' },
        { label: 'Montana', value: 'MT' },
        { label: 'Nebraska', value: 'NE' },
        { label: 'Nevada', value: 'NV' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New Mexico', value: 'NM' },
        { label: 'New York', value: 'NY' },
        { label: 'North Carolina', value: 'NC' },
        { label: 'North Dakota', value: 'ND' },
        { label: 'Ohio', value: 'OH' },
        { label: 'Oklahoma', value: 'OK' },
        { label: 'Oregon', value: 'OR' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'South Carolina', value: 'SC' },
        { label: 'South Dakota', value: 'SD' },
        { label: 'Tennessee', value: 'TN' },
        { label: 'Texas', value: 'TX' },
        { label: 'Utah', value: 'UT' },
        { label: 'Vermont', value: 'VT' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington', value: 'WA' },
        { label: 'West Virginia', value: 'WV' },
        { label: 'Wisconsin', value: 'WI' },
        { label: 'Wyoming', value: 'WY' },
    ];
    UEIOptions = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    eligibiltyOptions = [
            { label: '(a) is an existing RUS borrower', value: '(a) is an existing RUS borrower' },
            { label: '(b) is a former RUS or REA borrower', value: '(b) is a former RUS or REA borrower' },
            { label: '(c) has never been a RUS or REA borrower', value: '(c) has never been a RUS or REA borrower' },
        ]
    UEIOptions = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ]
    privateEntityOptions = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ]
    
    handleBusinessNameChange(event) {
        this.rec.Name = event.target.value;
    }

    handleBusinessStreet1Change(event) {
        this.rec.Street1 = event.target.value;
    }

    handleBusinessStreet2Change(event) {
        this.rec.Street2 = event.target.value;
    }
    handleBusinessStreet3Change(event) {
        this.rec.Street3 = event.target.value;
    }

    handleBusinessCityChange(event) {
        this.rec.City = event.target.value;
    }
    handleBusinessStateChange(event) {
        this.rec.State = event.target.value;
        console.log('Business State: ' + this.rec.State);
    }
    handleBusinessZipChange(event) {
        this.rec.Zip = event.target.value;
    }
    handleUeiIdChange(event){
        this.rec.UeiIdentifier = event.target.value;
    }
    handleUEIChange(event) {
        this.rec.UeiId = event.target.value;
        console.log("uei", this.rec.UeiId)
    }
    handleNoUeiChange(event){
        this.rec.NoUeiExplaination = event.target.value;
    }
    handleTaxIdChange(event){
        this.rec.TaxId = event.target.value;
    }

    handleEligibilityChange(event){
        this.rec.EligibilityOptions = event.target.value;
        }
    
    handlePrivateEntity(event){
        this.rec.IsNotForProfit = event.target.value;
    }

    handleSubmit() {
        createEntity({ rec: this.rec })
            .then((result) => {
                // Success toast
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
                        console.log('Business entity created successfully');
                }
                this.close(result);
                console.log('result Id', this.message.Id)
              
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch((error) => {
                // Error handling
                console.error('Error creating business entity:', error);
            });
    }
}