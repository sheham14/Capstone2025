package Auto;
import java.time.LocalDate;

import Insurance.Policy;
import User.Customer;

public class AutoInsurance extends Policy {
    private int driverAge;
    private int accidents;
    private String vehicleMake;
    private String vehicleModel;
    private int vehicleYear;
    private boolean hasHomePolicyDiscount;

    public AutoInsurance(String policyId, Customer insuredPerson, LocalDate startDate,
                         double basePremium, double taxRate, int driverAge, int accidents,
                         String vehicleMake, String vehicleModel, int vehicleYear,
                         boolean hasHomePolicyDiscount, double totalPremium) {
        super(policyId, insuredPerson, startDate, basePremium, taxRate);
        this.driverAge = driverAge;
        this.accidents = accidents;
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.vehicleYear = vehicleYear;
        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
        setTotalPremium(totalPremium);
    }

    public int getDriverAge() {
        return driverAge;
    }

    public void setDriverAge(int driverAge) {
        this.driverAge = driverAge;
    }

    public int getAccidents() {
        return accidents;
    }

    public void setAccidents(int accidents) {
        this.accidents = accidents;
    }

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public int getVehicleYear() {
        return vehicleYear;
    }

    public void setVehicleYear(int vehicleYear) {
        this.vehicleYear = vehicleYear;
    }

    public boolean isHasHomePolicyDiscount() {
        return hasHomePolicyDiscount;
    }

    public void setHasHomePolicyDiscount(boolean hasHomePolicyDiscount) {
        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
    }
}