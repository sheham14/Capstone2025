package org.example.pojos.Core;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;

@Entity
public class LoginToken {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID token;

    @ManyToOne
    @JoinColumn(name= "user_id")
    private User user;

    private LocalDateTime createdAt = LocalDateTime.now();

    public LoginToken() {}

    public UUID getToken() {
        return this.token;
    }

    public void setTokenOwner (User user) {
        this.user = user;
    }

    public User getTokenOwner () {
        return this.user;
    }
}
