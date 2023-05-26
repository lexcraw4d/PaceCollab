public with sharing class CreateBusinessEntity {


    @AuraEnabled
    public static void createEntity (BusinessEntityInfo rec){
        
        try {
            String name = rec.Name;
            String street1 = rec.Street1;
            String street2 = rec.Street2;
            String street3 = rec.Street3;
            
            RD_PACE_Business_Entity_Card__c business = new RD_PACE_Business_Entity_Card__c();
            business.Name = name;
            business.RD_PACE_Street1__c = street1;
            business.RD_PACE_Street2__c = street2;
            business.RD_PACE_Street3__c = street3;


            insert business;
       
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}