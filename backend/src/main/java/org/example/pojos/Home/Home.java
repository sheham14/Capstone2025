package org.example.pojos.Home;

import jakarta.persistence.*;
import java.time.Year;

/**
 * Represents a home entity with various attributes such as year built,
 * home value, liability limit, dwelling type, heating type, and location type.
 * 
 * @author Parker Wallace 
 */
@Entity
@Table(name = "homes")
public class Home {
    
    /**
     * The unique identifier for the home.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The year the home was built.
     */
    @Column(name = "year_built", nullable = false)
    private int yearBuilt;

    /**
     * The estimated value of the home.
     */
    @Column(name = "home_value", nullable = false)
    private double homeValue;

    /**
     * The liability limit associated with the home.
     */
    @Column(name = "liability_limit", nullable = false)
    private double liabilityLimit;

    /**
     * The type of dwelling (e.g., BUNGALOW, STANDALONE).
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "dwelling_type", nullable = false)
    private DWELLINGTYPE dwellingType;

    /**
     * The type of heating used in the home (e.g., GAS, OIL, ELECTRIC).
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "heating_type", nullable = false)
    private HEATINGTYPE heatingType;

    /**
     * The location type of the home (e.g., RURAL, URBAN).
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "location_type", nullable = false)
    private LOCATIONTYPE locationType;

    /**
     * Default constructor required by JPA.
     */
    public Home() {}

    /**
     * Constructs a new Home object with specified attributes.
     * 
     * @param yearBuilt The year the home was built.
     * @param homeValue The estimated value of the home.
     * @param liabilityLimit The liability limit associated with the home.
     * @param dwellingType The type of dwelling.
     * @param heatingType The type of heating used.
     * @param locationType The location type of the home.
     */
    public Home(Year yearBuilt, double homeValue, double liabilityLimit, DWELLINGTYPE dwellingType,
                HEATINGTYPE heatingType, LOCATIONTYPE locationType) {
        this.yearBuilt = yearBuilt.getValue();
        this.homeValue = homeValue;
        this.liabilityLimit = liabilityLimit;
        this.dwellingType = dwellingType;
        this.heatingType = heatingType;
        this.locationType = locationType;
    }

    /**
     * Enumeration representing different dwelling types.
     */
    public enum DWELLINGTYPE { BUNGALOW, STANDALONE }

    /**
     * Enumeration representing different heating types.
     */
    public enum HEATINGTYPE { GAS, OIL, ELECTRIC }

    /**
     * Enumeration representing different location types.
     */
    public enum LOCATIONTYPE { RURAL, URBAN }

    /**
     * Gets the unique identifier of the home.
     * @return The home ID.
     */
    public Long getId() { return id; }

    /**
     * Gets the year the home was built.
     * @return The year built.
     */
    public int getYearBuilt() { return yearBuilt; }

    /**
     * Sets the year the home was built.
     * @param yearBuilt The year built.
     */
    public void setYearBuilt(Year yearBuilt) { this.yearBuilt = yearBuilt.getValue(); }

    /**
     * Gets the estimated value of the home.
     * @return The home value.
     */
    public double getHomeValue() { return homeValue; }

    /**
     * Sets the estimated value of the home.
     * @param homeValue The home value.
     */
    public void setHomeValue(double homeValue) { this.homeValue = homeValue; }

    /**
     * Gets the liability limit associated with the home.
     * @return The liability limit.
     */
    public double getLiabilityLimit() { return liabilityLimit; }

    /**
     * Sets the liability limit associated with the home.
     * @param liabilityLimit The liability limit.
     */
    public void setLiabilityLimit(double liabilityLimit) { this.liabilityLimit = liabilityLimit; }

    /**
     * Gets the dwelling type of the home.
     * @return The dwelling type.
     */
    public DWELLINGTYPE getDwellingType() { return dwellingType; }

    /**
     * Sets the dwelling type of the home.
     * @param dwellingType The dwelling type.
     */
    public void setDwellingType(DWELLINGTYPE dwellingType) { this.dwellingType = dwellingType; }

    /**
     * Gets the heating type of the home.
     * @return The heating type.
     */
    public HEATINGTYPE getHeatingType() { return heatingType; }

    /**
     * Sets the heating type of the home.
     * @param heatingType The heating type.
     */
    public void setHeatingType(HEATINGTYPE heatingType) { this.heatingType = heatingType; }

    /**
     * Gets the location type of the home.
     * @return The location type.
     */
    public LOCATIONTYPE getLocationType() { return locationType; }

    /**
     * Sets the location type of the home.
     * @param locationType The location type.
     */
    public void setLocationType(LOCATIONTYPE locationType) { this.locationType = locationType; }
}
