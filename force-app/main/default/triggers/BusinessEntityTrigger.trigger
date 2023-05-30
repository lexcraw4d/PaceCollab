trigger BusinessEntityTrigger on RD_PACE_Business_Entity_Card__c (after insert) {
    BusinessEntityTriggerHandler.handleAfterInsert(trigger.new);
}