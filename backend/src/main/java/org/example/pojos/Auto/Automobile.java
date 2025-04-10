package org.example.pojos.Auto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.Year;

/**
 * Represents an automobile for use in the TaylorInsurance quoting system. contains all the necessary methods and contructors
 * 
 * @author Parker Wallace
 */
@Entity
public class Automobile {
    private String vehicleMake;
    private String vehicleModel;
    private Year vehicleYear;
    private int numberofAccidents;

    @Id
    @GeneratedValue
    private Long id;

    public Automobile(String make, String model, Year year, int accidents) {
        this.numberofAccidents = accidents;
        this.vehicleMake = make;
        this.vehicleModel = model;
        this.vehicleYear = year;
    }

    public Automobile() {

    }

    /**
     * Getter method for this Vehicle's make
     * @return the make of this Vehicle
     */
    public String getVehicleMake() {
        return this.vehicleMake;
    }

    /**
     * Setter method for this Vehicles make
     * @param vehicleMake the new make of this Vehicle
     */
    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    /**
     * Getter method of this Vehicle's model
     * @return the model of this Vehicle
     */
    public String getVehicleModel() {
        return this.vehicleModel;
    }

    /**
     * Setter method for this Vehicle's model
     * @param vehicleModel the new model for this Vehicle
     */
    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    /**
     * Getter method for this Vehicle's manufacture year
     * @return the year this Vehicle was manufactured
     */
    public Year getVehicleYear() {
        return this.vehicleYear;
    }

    /**
     * Setter method for this Vehicle's manufacture year
     * @param vehicleYear the new year for this Vehicles manufacture
     */
    public void setVehicleYear(Year vehicleYear) {
        this.vehicleYear = vehicleYear;
    }

    /**
     * Getter method for the number of accidens this vehicle has been in
     * @return the number of accidents this Vehicle has been in
     */
    public int getNumberofAccidents() {
        return this.numberofAccidents;
    }

    /**
     * Setter methid for this vehicles accidents
     * @param numberofAccidents the new number of accidents this vehicle has suffered
     */
    public void setNumberofAccidents(int numberofAccidents) {
        this.numberofAccidents = numberofAccidents;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}