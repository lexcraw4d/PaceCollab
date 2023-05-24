public with sharing class CreateBusinessEntity {
    @AuraEnabled
    public static RD_PACE_Business_Entity_Card__c createEntity (RD_PACE_Business_Entity_Card__c business){
        try {
                insert business;
                return business;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}