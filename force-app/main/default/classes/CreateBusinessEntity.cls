public with sharing class CreateBusinessEntity {


    @AuraEnabled
    public static void createEntity (BusinessEntityInfo rec){

        // Access the properties of the custom object
        String name = rec.Name;
        String street1 = rec.Street1;
        String street2 = rec.Street2;
        String street3 = rec.Street3;
        String city = rec.City;
        String state = rec.State;
        String zip = rec.Zip;
        String taxId = rec.TaxId;
        String ueiId = rec.UeiId;
        String ueiIdentifier = rec.UeiIdentifier;
        String noUeiExplaination = rec.NoUeiExplaination;
        String eligibilityOptions = rec.EligibilityOptions;
        String isNotForProfit = rec.IsNotForProfit;
        String legStatus = rec.LegStatus;
        // Create a new instance of the custom object and set the field values
        RD_PACE_Business_Entity_Card__c business = new RD_PACE_Business_Entity_Card__c();
        business.Name = name;
        business.RD_PACE_Street1__c = street1;
        business.RD_PACE_Street2__c = street2;
        business.RD_PACE_Street3__c = street3;
        business.RD_PACE_City__C = city;
        business.RD_PACE_Zip__c = zip;
        business.RD_PACE_State__c = state;
        business.RD_PACE_TaxIdentificationNumber__c = taxId;
        business.RD_PACE_ActiveUEI__c = ueiId;
        business.RD_PACE_UniqueIdentificationNumber__c = ueiIdentifier;
        business.RD_PACE_NoUEI__c = noUeiExplaination;
        business.RD_PACE_EligibleEntityDetemination__c = eligibilityOptions;
        business.RD_PACE_CheckIfNonProfit__c = isNotForProfit;
        business.RD_PACE_LegalStatus__c = legStatus;
        // Check if the Business Entity has a Salesforce ID
        if (business.Id == null || String.isBlank(String.valueOf(business.Id))) {
        // Create the Admin Role object and set the field values
             RD_PACE_Role__c adminRole = new RD_PACE_Role__c();
             adminRole.RD_PACE_RoleName__c = 'Admin';
             adminRole.Name = business.Name;
             
        // Insert the Admin Role record
        upsert adminRole;
        }
       
        // Insert the record
         upsert business;
    }
      

}