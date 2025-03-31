package org.example.pojos.Core;
import java.time.LocalDate;

import org.example.pojos.User.Customer;

public abstract class Policy {
    private String policyId;
    private Customer insuredPerson;
    private LocalDate startDate;
    private LocalDate endDate;
    private double basePremium;
    private double taxRate;
    private double totalPremium;

    public Policy(String policyId, Customer insuredPerson, LocalDate startDate, double basePremium, double taxRate) {
        this.policyId = policyId;
        this.insuredPerson = insuredPerson;
        this.startDate = startDate;
        this.endDate = startDate.plusYears(1);
        this.basePremium = basePremium;
        this.taxRate = taxRate;
        this.totalPremium = 0.0;

        // insuredPerson.addPolicy(this);
    }

    public double getTotalPremium() {
        return totalPremium;
    }

    // Getters and Setters
    public String getPolicyId() {
        return policyId;
    }

    public void setPolicyId(String policyId) {
        this.policyId = policyId;
    }

    public Customer getInsuredPerson() {
        return insuredPerson;
    }

    public void setInsuredPerson(Customer insuredPerson) {
        this.insuredPerson = insuredPerson;
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