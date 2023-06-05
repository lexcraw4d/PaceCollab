public class BusinessEntityInfo {
    @AuraEnabled
    public String name { get; set; }
    
    @AuraEnabled
    public String street1 { get; set; }
    
    @AuraEnabled
    public String street2 { get; set; }
    @AuraEnabled
    public String street3 { get; set; }
    
    @AuraEnabled
    public String city { get; set; }
   
    @AuraEnabled
    public String state { get; set; }

    @AuraEnabled
    public String zip { get; set; }

    @AuraEnabled
    public String taxId { get; set; }

    @AuraEnabled
    public String legStatus {get; set;}

    @AuraEnabled
    public String ueiIdentifier { get; set; }

    @AuraEnabled
    public String ueiId { get; set; }
    
    @AuraEnabled
    public String noUeiExplaination { get; set; }
   
    @AuraEnabled
    public String eligibilityOptions { get; set; }
    
    @AuraEnabled
    public String isNotForProfit { get; set; }
    

    }
