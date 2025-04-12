package org.example.pojos.Home;

import java.time.LocalDate;

import org.example.pojos.Core.Policy;
import org.example.pojos.Core.User;

import jakarta.persistence.*;

@Entity
public class HomeInsurance extends Policy {

    @Embedded
    private Home insuredHome;
  
    private boolean hasAutoPolicyDiscount;
  
    public HomeInsurance() {
    }

    public HomeInsurance(
                       User policyOwner,
                       LocalDate startDate,
                       double basePremium,
                       double taxRate,
                       POLICYVIEWINGTYPE viewingType,
                       boolean activeStatus,
                       Home insuredHome,
                       boolean hasAutoPolicyDiscount,
                       double totalPremium) {
       super(policyOwner, startDate, basePremium, taxRate, viewingType, activeStatus);
       this.insuredHome = insuredHome;
       this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
       setTotalPremium(totalPremium);
   }

   public Home getInsuredHome() {
       return this.insuredHome;
   }

   public void setInsuredHome(Home insuredHome) {
    this.insuredHome = insuredHome;
   }

   public boolean hasAutoPolicyDiscount() {
       return hasAutoPolicyDiscount;
   }

   public void setHasAutoPolicyDiscount(boolean hasAutoPolicyDiscount) {
       this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
   }
}
