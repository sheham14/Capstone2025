package Auto;
import java.time.LocalDate;

import Insurance.Quote;
import User.Customer;

public class AutoQuote extends Quote {
    private final int driverAge;
    private final int accidents;
    private final String vehicleMake;
    private final String vehicleModel;
    private final int vehicleYear;
    private final boolean hasHomePolicyDiscount;

    public AutoQuote(String quoteId, Customer insuredPerson, LocalDate startDate,
                     double basePremium, double taxRate, int driverAge, int accidents,
                     String vehicleMake, String vehicleModel, int vehicleYear,
                     boolean hasHomePolicyDiscount) {
        super(quoteId, insuredPerson, startDate, basePremium, taxRate);
        this.driverAge = driverAge;
        this.accidents = accidents;
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.vehicleYear = vehicleYear;
        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
        this.updatePremium();
    }

    @Override
    public double calculatePremium() {
        double ageFactor = (driverAge < 25) ? 2.0 : 1.0;
        double accidentFactor = (accidents > 2) ? 2.5 : (accidents == 1) ? 1.25 : 1.0;
        int currentYear = LocalDate.now().getYear();
        int vehicleAge = currentYear - vehicleYear;
        double vehicleFactor = (vehicleAge > 10) ? 2.0 : (vehicleAge > 5) ? 1.5 : 1.0;
        double discountFactor = hasHomePolicyDiscount ? 0.9 : 1.0;

        double totalPremium = this.getBasePremium() * ageFactor * accidentFactor * vehicleFactor * discountFactor * this.getTaxRate();

        return Math.round(totalPremium * 100) / 100.0;
    }

    // Getters
    public int getDriverAge() { return driverAge; }
    public int getAccidents() { return accidents; }
    public String getVehicleMake() { return vehicleMake; }
    public String getVehicleModel() { return vehicleModel; }
    public int getVehicleYear() { return vehicleYear; }
    public boolean hasHomePolicyDiscount() { return hasHomePolicyDiscount; }
}
