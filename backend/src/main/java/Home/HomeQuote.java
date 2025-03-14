package Home;
import java.time.LocalDate;

import Insurance.Quote;
import User.Customer;

public class HomeQuote extends Quote {
    private int yearBuilt;
    private String dwellingType;
    private String heatingType;
    private String location;
    private double homeValue;
    private double liabilityLimit;
    private boolean hasAutoPolicyDiscount;

    public HomeQuote(String quoteId, Customer insuredPerson, LocalDate startDate,
                     double basePremium, double taxRate, int yearBuilt,
                     String dwellingType, String heatingType, String location,
                     double homeValue, double liabilityLimit, boolean hasAutoPolicyDiscount) {
        super(quoteId, insuredPerson, startDate, basePremium, taxRate);

        this.yearBuilt = yearBuilt;
        this.dwellingType = (dwellingType != null) ? dwellingType : "unknown";
        this.heatingType = (heatingType != null) ? heatingType : "other";
        this.location = (location != null) ? location : "unknown";
        this.homeValue = homeValue;
        this.liabilityLimit = liabilityLimit;
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
        this.updatePremium();
    }

    @Override
    public double calculatePremium() {
        double homeValueFactor = (homeValue > 250000) ? (homeValue - 250000) * 0.002 : 0;
        int homeAge = LocalDate.now().getYear() - yearBuilt;
        double homeAgeFactor = (homeAge > 50) ? 1.5 : (homeAge > 25) ? 1.25 : 1.0;
        double heatingFactor = heatingType.equalsIgnoreCase("oil") ? 2.0 :
                heatingType.equalsIgnoreCase("wood") ? 1.25 : 1.0;
        double locationFactor = location.equalsIgnoreCase("rural") ? 1.15 : 1.0;
        double discountFactor = hasAutoPolicyDiscount ? 0.9 : 1.0;

        return (getBasePremium() + homeValueFactor) * homeAgeFactor *
                heatingFactor * locationFactor *
                discountFactor * getTaxRate();
    }

    public int getYearBuilt() { return yearBuilt; }
    public String getDwellingType() { return dwellingType; }
    public String getHeatingType() { return heatingType; }
    public String getLocation() { return location; }
    public double getHomeValue() { return homeValue; }
    public double getLiabilityLimit() { return liabilityLimit; }
    public boolean hasAutoPolicyDiscount() { return hasAutoPolicyDiscount; }
}
