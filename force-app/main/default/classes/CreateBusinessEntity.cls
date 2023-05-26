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
        
        // Create a new instance of the custom object and set the field values
        RD_PACE_Business_Entity_Card__c business = new RD_PACE_Business_Entity_Card__c();
        business.Name = name;
        business.RD_PACE_Street1__c = street1;
        business.RD_PACE_Street2__c = street2;
        business.RD_PACE_Street3__c = street3;
        business.RD_PACE_City__C = city;
        business.RD_PACE_Zip__c = zip;
        business.RD_PACE_State__c = state;

    
        
        // Insert the record
        insert business;
       
            
        }
    
}