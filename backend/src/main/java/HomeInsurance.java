import java.time.LocalDate;

public class HomeInsurance extends Policy {
    private int yearBuilt;
    private String dwellingType;
    private String heatingType;
    private String location;
    private double homeValue;
    private double liabilityLimit;
    private boolean hasAutoPolicyDiscount;

    public HomeInsurance(String policyId, Customer insuredPerson, LocalDate startDate, double basePremium, double taxRate,
                         int yearBuilt, String dwellingType, String heatingType, String location, double homeValue,
                         double liabilityLimit, boolean hasAutoPolicyDiscount, double totalPremium) {
        super(policyId, insuredPerson, startDate, basePremium, taxRate);
        this.yearBuilt = yearBuilt;
        this.dwellingType = dwellingType;
        this.heatingType = heatingType;
        this.location = location;
        this.homeValue = homeValue;
        this.liabilityLimit = liabilityLimit;
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
        setTotalPremium(totalPremium);
    }

    // Getters
    public int getYearBuilt() { return yearBuilt; }
    public String getDwellingType() { return dwellingType; }
    public String getHeatingType() { return heatingType; }
    public String getLocation() { return location; }
    public double getHomeValue() { return homeValue; }
    public double getLiabilityLimit() { return liabilityLimit; }
    public boolean hasAutoPolicyDiscount() { return hasAutoPolicyDiscount; }

    // Setters
    public void setYearBuilt(int yearBuilt) { this.yearBuilt = yearBuilt; }
    public void setDwellingType(String dwellingType) { this.dwellingType = dwellingType; }
    public void setHeatingType(String heatingType) { this.heatingType = heatingType; }
    public void setLocation(String location) { this.location = location; }
    public void setHomeValue(double homeValue) { this.homeValue = homeValue; }
    public void setLiabilityLimit(double liabilityLimit) { this.liabilityLimit = liabilityLimit; }
    public void setHasAutoPolicyDiscount(boolean hasAutoPolicyDiscount) { this.hasAutoPolicyDiscount = hasAutoPolicyDiscount; }
}
