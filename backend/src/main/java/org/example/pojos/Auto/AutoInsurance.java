package org.example.pojos.Auto;

import java.time.LocalDate;
import org.example.pojos.Core.Policy;
import org.example.pojos.Core.User;

import jakarta.persistence.*;


@Entity
public class AutoInsurance extends Policy {

    @Embedded
    private Automobile insuredAutomobile;
    
    private boolean hasHomePolicyDiscount;

    public AutoInsurance(
                User insuredPerson,
                String policyId,
                LocalDate startDate,
                double basePremium,
                POLICYVIEWINGTYPE viewingType,
                boolean activeStatus,
                double taxRate,
                int driverAge,
                Automobile insuredAutomobile,
                boolean hasHomePolicyDiscount,
                double totalPremium
                ) {
       super(insuredPerson, startDate, basePremium, taxRate, viewingType, activeStatus );

       this.insuredAutomobile = insuredAutomobile;
       this.hasHomePolicyDiscount = hasHomePolicyDiscount;
       setTotalPremium(totalPremium);
   }

   public Automobile getInsuredAutomobile() {
       return this.insuredAutomobile;
   }

   public void setInsuredAutomobile(Automobile insuredAutomobile){
    this.insuredAutomobile = insuredAutomobile;
   }
   public boolean isHasHomePolicyDiscount() {
       return hasHomePolicyDiscount;
   }

   public void setHasHomePolicyDiscount(boolean hasHomePolicyDiscount) {
       this.hasHomePolicyDiscount = hasHomePolicyDiscount;
   }
}