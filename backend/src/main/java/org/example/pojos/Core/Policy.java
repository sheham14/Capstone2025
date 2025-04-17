package org.example.pojos.Core;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;


@MappedSuperclass
public abstract class Policy {

    public enum POLICYVIEWINGTYPE {
        QUOTE,
        POLICY
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User policyOwner;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    
    private double basePremium;
    
    private double taxRate;
    
    private double totalPremium;
    
    private boolean activeStatus; 
    
    @Enumerated(EnumType.STRING)
    private POLICYVIEWINGTYPE viewingType ;

public Policy() {}

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
       this.activeStatus = activeStatus;
   }

   @PrePersist
   @PreUpdate
   private void autoUpdatePolicyEndDate(){
    LocalDate today = LocalDate.now();
    if (this.activeStatus && today.equals(this.endDate)) {
        this.endDate = today.plusYears(1);
    }
   }

    public Integer getId() {
        return id;
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

   public boolean getActiveStatus() {
    return this.activeStatus;
   }

   public void setActiveStatus(boolean activeStatus) {
    this.activeStatus = activeStatus;
   }

   public POLICYVIEWINGTYPE getViewingType() {
    return this.viewingType;
   }

public void setViewingType(POLICYVIEWINGTYPE viewingType) {
    this.viewingType = viewingType;
}

public double getTotalPremium() {
    return this.totalPremium;
}

}