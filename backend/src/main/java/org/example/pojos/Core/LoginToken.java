package org.example.pojos.Core;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
public class LoginToken {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String token;

    @ManyToOne
    @JoinColumn(name= "user_id")
    private User user;

    private LocalDateTime createdAt = LocalDateTime.now();

    public LoginToken() {}

    public String getToken() {
        return this.token;
    }

    public void setTokenOwner (User user) {
        this.user = user;
    }
}
