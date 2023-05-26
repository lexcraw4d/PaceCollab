public with sharing class CustomObjectController {
    @AuraEnabled
    public static void createCustomObjectRecord(String name, String description) {
        CustomObject__c customObject = new CustomObject__c();
        customObject.Name = name;
        customObject.Description__c = description;
        insert customObject;
    }
}