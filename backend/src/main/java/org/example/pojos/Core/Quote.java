//package org.example.pojos.Core;
//import java.time.LocalDate;
//
//import org.example.pojos.User.Customer;
//
//public abstract class Quote {
//    private final String quoteId;
//    private final Customer insuredPerson;
//    private final LocalDate startDate;
//    private final LocalDate endDate;
//    private final double basePremium;
//    private final double taxRate;
//    private double totalPremium;
//
//    public Quote(String quoteId, Customer insuredPerson, LocalDate startDate,
//                 double basePremium, double taxRate) {
//        this.quoteId = quoteId;
//        this.insuredPerson = insuredPerson;
//        this.startDate = startDate;
//        this.endDate = startDate.plusDays(30);
//        this.basePremium = basePremium;
//        this.taxRate = taxRate;
//        this.totalPremium = 0.0;
//        insuredPerson.addQuote(this);
//    }
//
//
//    public abstract double calculatePremium();
//
//    public final void updatePremium() {
//        this.totalPremium = calculatePremium();
//    }
//
//    public String getQuoteId() { return quoteId; }
//    public Customer getInsuredPerson() { return insuredPerson; }
//    public LocalDate getStartDate() { return startDate; }
//    public LocalDate getEndDate() { return endDate; }
//    public double getBasePremium() { return basePremium; }
//    public double getTaxRate() { return taxRate; }
//    public double getTotalPremium() { return totalPremium; }
//
//    void setTotalPremium(double totalPremium) {
//        this.totalPremium = totalPremium;
//    }
//}
