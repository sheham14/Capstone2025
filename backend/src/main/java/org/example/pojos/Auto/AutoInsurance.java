//package org.example.pojos.Auto;
//
//import java.time.LocalDate;
//import java.time.Year;
//import org.example.pojos.Core.Policy;
//import org.example.pojos.User.Customer;
//
//
//public class AutoInsurance extends Policy {
//    private int driverAge;
//    private Automobile insuredVehicle;
//    private boolean hasHomePolicyDiscount;
//
//    public AutoInsurance(String policyId,
//    Customer insuredPerson,
//    LocalDate startDate,
//    double basePremium,
//    double taxRate,
//    int driverAge,
//    int accidents,
//    String vehicleMake,
//    String vehicleModel,
//    Year vehicleYear,
//    boolean hasHomePolicyDiscount,
//    double totalPremium) {
//        super(policyId, insuredPerson, startDate, basePremium, taxRate);
//        this.driverAge = driverAge;
//        this.insuredVehicle = new Automobile(vehicleMake, vehicleModel, vehicleYear, accidents);
//        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
//        setTotalPremium(totalPremium);
//    }
//
//    public int getDriverAge() {
//        return driverAge;
//    }
//
//    public void setDriverAge(int driverAge) {
//        this.driverAge = driverAge;
//    }
//
//    public Automobile getInsuredVehicle() {
//        return this.insuredVehicle;
//    }
//    public boolean isHasHomePolicyDiscount() {
//        return hasHomePolicyDiscount;
//    }
//
//    public void setHasHomePolicyDiscount(boolean hasHomePolicyDiscount) {
//        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
//    }
//}