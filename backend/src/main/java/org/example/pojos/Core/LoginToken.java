package org.example.pojos.Core;

import java.time.LocalDateTime;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class LoginToken {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID token;

    @ManyToOne
    @JoinColumn(name= "user_id")
    private User user;

    @JsonFormat(pattern = "yyyy-MM-dd")
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
