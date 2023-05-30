public class BusinessEntityTriggerHandler {
    public static void handleAfterInsert(List<RD_PACE_Business_Entity_Card__c> newBusinessEntities) {
        List<RD_PACE_Role__c> adminRoles = new List<RD_PACE_Role__c>();
        Set<Id> businessIds = new Set<Id>();

        // Collect the Business Entity Ids
        for (RD_PACE_Business_Entity_Card__c businessEntity : newBusinessEntities) {
            businessIds.add(businessEntity.Id);
        }

        // Query for existing Admin roles related to the Business Entities
        adminRoles = [SELECT Id, Name FROM RD_PACE_Role__c WHERE Role__c = 'Admin' AND Business_Entity__c IN :businessIds];

        // Map to store the Business Entity Id and the corresponding Admin role
        Map<Id, RD_PACE_Role__c> businessIdToAdminRoleMap = new Map<Id, RD_PACE_Role__c>();

        for (RD_PACE_Role__c adminRole : adminRoles) {
            // Add existing Admin roles to the map
            businessIdToAdminRoleMap.put(adminRole.Role__c, adminRole);
        }

        List<RD_PACE_Role__c> rolesToCreate = new List<RD_PACE_Role__c>();

        for (RD_PACE_Business_Entity_Card__c businessEntity : newBusinessEntities) {
            // Check if the Business Entity already has an Admin role
            if (businessIdToAdminRoleMap.containsKey(businessEntity.Id)) {
                // If an Admin role already exists, throw an error
                businessEntity.addError('Error: Admin role already exists.');
            } else {
                // If an Admin role doesn't exist, create a new Admin role
                RD_PACE_Role__c adminRole = new RD_PACE_Role__c();
                adminRole.Role__c = 'Admin';
                adminRole.Name = businessEntity.Id;
                adminRole.Business_Entity__c = businessEntity.Name;
                // Set other required fields on the RD_PACE_Role__c object if needed

                rolesToCreate.add(adminRole);
            }
        }

        if (!rolesToCreate.isEmpty()) {
            // Insert the new Admin roles
            insert rolesToCreate;
        }
    }
}