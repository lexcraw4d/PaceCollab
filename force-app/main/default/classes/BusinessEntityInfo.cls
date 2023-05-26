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
}