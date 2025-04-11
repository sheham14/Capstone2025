package org.example.pojos.Core;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
public class Token {
    @Id
    private String token;

    @ManyToOne
    @JoineColumn()
}
