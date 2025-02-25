import java.time.LocalDate;

public class AutoInsurance extends Policy {
    private int driverAge;
    private int accidents;
    private String address;
    private String vehicleMake;
    private String vehicleModel;
    private int vehicleYear;
    private boolean hasHomePolicyDiscount;

    public AutoInsurance(String policyId, Customer insuredPerson, LocalDate startDate, double basePremium, double taxRate,
                         int driverAge, int accidents, String address, String vehicleMake, String vehicleModel,
                         int vehicleYear, boolean hasHomePolicyDiscount) {
        super(policyId, insuredPerson, startDate, basePremium, taxRate);
        this.driverAge = driverAge;
        this.accidents = accidents;
        this.address = address;
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.vehicleYear = vehicleYear;
        this.hasHomePolicyDiscount = hasHomePolicyDiscount;
    }

    @Override
    public double calculatePremium() {
        double driverAgeFactor = (driverAge < 25) ? 2.0 : 1.0;

        double accidentFactor = (accidents > 2) ? 2.5 :
                (accidents == 1) ? 1.25 : 1.0;

        int currentYear = LocalDate.now().getYear();
        int vehicleAge = currentYear - vehicleYear;
        double vehicleAgeFactor = (vehicleAge > 10) ? 2.0 :
                (vehicleAge > 5) ? 1.5 : 1.0;

        double discountFactor = hasHomePolicyDiscount ? 0.9 : 1.0;

        return getBasePremium() * driverAgeFactor * accidentFactor *
                vehicleAgeFactor * discountFactor * getTaxRate();
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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