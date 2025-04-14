package org.example.pojos.Auto;

import jakarta.persistence.Embeddable;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * Represents an automobile for use in the TaylorInsurance quoting system. contains all the necessary methods and contructors
 * 
 * @author Parker Wallace
 */
@Embeddable
public class Automobile {

    private String vehicleMake;

    private String vehicleModel;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate manufactureDate;

    private int numberofAccidents;



    public Automobile(String make, String model, LocalDate manufacturerDate, Integer accidents) {
        this.numberofAccidents = accidents;
        this.vehicleMake = make;
        this.vehicleModel = model;
        this.manufactureDate = manufacturerDate;
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
    public LocalDate getVehicleManufactureDate() {
        return this.manufactureDate;
    }

    /**
     * Setter method for this Vehicle's manufacture year
     * @param vehicleYear the new year for this Vehicles manufacture
     */
    public void setVehicleManufactureDate(LocalDate manufactureDate) {
        this.manufactureDate = manufactureDate;
    }

    /**
     * Getter method for the number of accidens this vehicle has been in
     * @return the number of accidents this Vehicle has been in
     */
    public Integer getNumberofAccidents() {
        return this.numberofAccidents;
    }

    /**
     * Setter methid for this vehicles accidents
     * @param numberofAccidents the new number of accidents this vehicle has suffered
     */
    public void setNumberofAccidents(Integer numberofAccidents) {
        this.numberofAccidents = numberofAccidents;
    }
}