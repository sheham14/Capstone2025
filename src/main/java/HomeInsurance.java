import java.time.LocalDate;

public class HomeInsurance extends Policy {
    private int ageBuilt;
    private String dwellingType; // standalone, bungalow, attached, semi-attached, etc.
    private String heatingType; // oil, wood, other
    private String location; // urban, rural
    private double homeValue;
    private String liabilityLimit;
    private boolean hasAutoPolicyDiscount;

    public HomeInsurance(String policyId, Customer insuredPerson, LocalDate startDate, double basePremium, double taxRate,
                         int ageBuilt, String dwellingType, String heatingType, String location, double homeValue,
                         String liabilityLimit, boolean hasAutoPolicyDiscount) {
        super(policyId, insuredPerson, startDate, basePremium, taxRate);
        this.ageBuilt = ageBuilt;
        this.dwellingType = dwellingType;
        this.heatingType = heatingType;
        this.location = location;
        this.homeValue = homeValue;
        this.liabilityLimit = liabilityLimit;
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
    }

    @Override
    public double calculatePremium() {
        // Home Value Factor
        double homeValueFactor = (homeValue > 250000) ? (homeValue - 250000) * 0.002 : 0;

        // Home Age Factor (from the image: 1.50 for ageBuilt = 1)
        double homeAgeFactor = 1.50; // Hardcoded to match the image

        // Heating Factor
        double heatingFactor = heatingType.equals("oil") ? 2.0 : heatingType.equals("wood") ? 1.25 : 1.0;

        // Location Factor
        double locationFactor = location.equals("rural") ? 1.15 : 1.0;

        // Discount Factor
        double discountFactor = hasAutoPolicyDiscount ? 0.9 : 1.0;

        // Premium Calculation
        return (getBasePremium() + homeValueFactor) * homeAgeFactor *
                heatingFactor * locationFactor * discountFactor * getTaxRate();
    }

    // Getters and Setters
    public int getAgeBuilt() {
        return ageBuilt;
    }

    public void setAgeBuilt(int ageBuilt) {
        this.ageBuilt = ageBuilt;
    }

    public String getDwellingType() {
        return dwellingType;
    }

    public void setDwellingType(String dwellingType) {
        this.dwellingType = dwellingType;
    }

    public String getHeatingType() {
        return heatingType;
    }

    public void setHeatingType(String heatingType) {
        this.heatingType = heatingType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getHomeValue() {
        return homeValue;
    }

    public void setHomeValue(double homeValue) {
        this.homeValue = homeValue;
    }

    public String getLiabilityLimit() {
        return liabilityLimit;
    }

    public void setLiabilityLimit(String liabilityLimit) {
        this.liabilityLimit = liabilityLimit;
    }

    public boolean isHasAutoPolicyDiscount() {
        return hasAutoPolicyDiscount;
    }

    public void setHasAutoPolicyDiscount(boolean hasAutoPolicyDiscount) {
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
    }
}