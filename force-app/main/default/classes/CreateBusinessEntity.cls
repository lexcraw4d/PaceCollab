public with sharing class CreateBusinessEntity {
    @AuraEnabled
    public static void createEntity (String name, String street1, String street2, String street3){
        try {
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