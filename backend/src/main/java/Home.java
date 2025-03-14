import java.time.Year;

/**
 * Represents a Home for use in the TaylorInsurance quoting system. contains all
 * the necessary methods and constructors
 */
public class Home {
    private Year yearBuilt;
    private double homeValue;
    private double liabilityLimit;
    private Home.DWELLINGTYPE dwellingType;
    private Home.HEATINGTYPE heatingType;
    private Home.LOCATIONTYPE locationType;

    /**
     * Constructor for this Home class
     * 
     * @param yearbuilt      the year which this home was built
     * @param homeValue      the value of this home in canadian dollars
     * @param liabilityLimit the liability limit of this Home
     * @param dwellingType   the dwelling type of this Home
     * @param heatingType    the heating type of this Home
     * @param locationType   the location type for this Home
     */
    public Home(Year yearbuilt, double homeValue, double liabilityLimit, Home.DWELLINGTYPE dwellingType,
            Home.HEATINGTYPE heatingType, Home.LOCATIONTYPE locationType) {
        this.dwellingType = dwellingType;
        this.heatingType = heatingType;
        this.homeValue = homeValue;
        this.liabilityLimit = liabilityLimit;
        this.yearBuilt = yearbuilt;
        this.locationType = locationType;
    }

    enum DWELLINGTYPE {
        bungalow, standalone
    }

    enum HEATINGTYPE {
        gas, oil, electric
    }

    enum LOCATIONTYPE {
        rural, urban
    }

    /**
     * Getter method for this Home
     * 
     * @return the dwelling type for this home
     */
    public Home.DWELLINGTYPE getDwellingType() {
        return this.dwellingType;
    }

    /**
     * Getter method for this Home
     * 
     * @return the value for this Home in canadian dollars
     */
    public double getHomeValue() {
        return this.homeValue;
    }

    /**
     * Getter method for the {@see Home.HEATINGTYPE} for this Home
     * 
     * @return
     */
    public Home.HEATINGTYPE getHeatingType() {
        return this.heatingType;
    }

    /**
     * Getter method for the {@see Home.LOCATIONTYPE} for this Home
     * 
     * @return
     */
    public Home.LOCATIONTYPE getLocationType() {
        return this.locationType;
    }

    /**
     * Getter method for the year this Home was built
     * 
     * @return the Year this Home was built
     */
    public Year getYearBuilt() {
        return this.yearBuilt;
    }

    /**
     * Getter method for the liability limit of this home
     * 
     * @return the liability limit for this home
     */
    public double getLiabilityLimit() {
        return this.liabilityLimit;
    }

    /**
     * Setter method for this Home's dwelling type
     * 
     * @param dwellingType the new dwelling type for this home
     */
    public void setDwellingType(Home.DWELLINGTYPE dwellingType) {
        this.dwellingType = dwellingType;
    }

    /**
     * Setter method for this Home's heating type
     * 
     * @param heatingType the new heating type for this Home
     */
    public void setHeatingType(Home.HEATINGTYPE heatingType) {
        this.heatingType = heatingType;
    }

    /**
     * Setter method for this Home's value
     * 
     * @param value the new value for this home
     */
    public void setHomeValue(double value) {
        this.homeValue = value;
    }

    /**
     * Setter method for this Home's liability limit
     * 
     * @param liabilityLimit the new liability limit for this Home
     */
    public void setLiabilityLimit(double liabilityLimit) {
        this.liabilityLimit = liabilityLimit;
    }

    /**
     * Setter method for this Home's Location type
     * 
     * @param locationType the new Location type for this Home
     */
    public void setLocation(Home.LOCATIONTYPE locationType) {
        this.locationType = locationType;
    }

    /**
     * Setter method for this Home's built year
     * 
     * @param yearBuilt the new year this home was built
     */
    public void setYearBuilt(Year yearBuilt) {
        this.yearBuilt = yearBuilt;
    }
}
