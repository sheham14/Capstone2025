package org.example.pojos.Home;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Year;

import org.example.pojos.Core.User;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * Represents a home entity with various attributes
 * 
 * @author Parker Wallace 
 */
@Embeddable
public class Home {
    
    /**
     * The year the home was built.
     */
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateBuilt;

    /**
     * The estimated value of the home.
     */
     private double homeValue;

    /**
     * The liability limit associated with the home.
     */
    private double liabilityLimit;

    /**
     * The type of dwelling (e.g., BUNGALOW, STANDALONE).
     */
    @Enumerated(EnumType.STRING)
    private DWELLINGTYPE dwellingType;

    /**
     * The type of heating used in the home (e.g., GAS, OIL, ELECTRIC).
     */
    @Enumerated(EnumType.STRING)
    private HEATINGTYPE heatingType;

    /**
     * The location type of the home (e.g., RURAL, URBAN).
     */
    @Enumerated(EnumType.STRING)
    private LOCATIONTYPE locationType;

public Home() {}

    /**
     * Constructs a new Home object with specified attributes.
     * 
     * @param dateBuilt The year the home was built.
     * @param homeValue The estimated value of the home.
     * @param liabilityLimit The liability limit associated with the home.
     * @param dwellingType The type of dwelling.
     * @param heatingType The type of heating used.
     * @param locationType The location type of the home.
     */
    public Home(LocalDate dateBuilt, double homeValue, double liabilityLimit, DWELLINGTYPE dwellingType,
                HEATINGTYPE heatingType, LOCATIONTYPE locationType) {
        this.dateBuilt = dateBuilt;
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
     * Gets the year the home was built.
     * @return The year built.
     */
    public LocalDate getDateBuilt() { return dateBuilt; }

    /**
     * Sets the year the home was built.
     * @param yearBuilt The year built.
     */
    public void setDateBuilt(LocalDate yearBuilt) { this.dateBuilt = yearBuilt; }

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
