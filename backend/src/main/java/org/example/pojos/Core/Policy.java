package org.example.pojos.Core;
import java.time.LocalDate;


public abstract class Policy {

    public enum POLICYVIEWINGTYPE {
        QUOTE,
        POLICY
    }

    private User policyOwner;
    private LocalDate startDate;
    private LocalDate endDate;
    private double basePremium;
    private double taxRate;
    private double totalPremium;
    private boolean active; 
    private POLICYVIEWINGTYPE viewingType ;

   public Policy(
   User policyOwner, 
   LocalDate startDate, 
   double basePremium, 
   double taxRate,
   POLICYVIEWINGTYPE viewingType,
   boolean activeStatus)
    {
       this.policyOwner = policyOwner;
       this.startDate = startDate;
       this.endDate = startDate.plusYears(1);
       this.basePremium = basePremium;
       this.taxRate = taxRate;
       this.totalPremium = 0.0;
       this.viewingType = viewingType;
       this.active = activeStatus;
   }

   public double getTotalPremium() {
       return totalPremium;
   }

   public User getPolicyOwner() {
       return this.policyOwner;
   }

   public void setPolicyOwner(User policyOwner) {
       this.policyOwner = policyOwner;
   }

   public LocalDate getStartDate() {
       return startDate;
   }

   public void setStartDate(LocalDate startDate) {
       this.startDate = startDate;
   }

   public LocalDate getEndDate() {
       return endDate;
   }

   public void setEndDate(LocalDate endDate) {
       this.endDate = endDate;
   }

   public double getBasePremium() {
       return basePremium;
   }

   public void setBasePremium(double basePremium) {
       this.basePremium = basePremium;
   }

   public double getTaxRate() {
       return taxRate;
   }

   public void setTaxRate(double taxRate) {
       this.taxRate = taxRate;
   }

   public void setTotalPremium(double totalPremium) {
       this.totalPremium = totalPremium;
   }
}