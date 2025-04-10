package org.example.pojos.Core;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Represents a User Entity with shared attributes between a Customer and Representative
 * 
 * @author Parker Wallace
 */
@Entity
public class User {

    /**
     * The unique identifier for this User.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    /**
     * This User's name identifier.
     */
    private String username;

    /**
     * This User's email.
     */
    private String email;

    /**
     * Default contructor required by JPA.
     */
    public User() {}
    
    /**
     * Constructs a new User object with specified attributes.
     * @param username the username for the user.
     * @param email the email contact for the user.
     */
    public User(String username, String email) {
        this.email = email;
        this.username = username;
    }
    
    // *******************
    // GETTERS AND SETTERS
    // *******************
    /**
     * Gets the unique identifier of this User.
     * @return
     */
    public Integer getId() {
        return id;
    }

    /**
     * Gets the username for This User.
     * @return This User's username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Gets the Email contact for This User
     * @return This User's email.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets this User's email property.
     * @param email The new email for this User.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Sets this User's username Property
     * @param username The new username for this User.
     */
    public void setUsername(String username) {
        this.username = username;
    }
}
