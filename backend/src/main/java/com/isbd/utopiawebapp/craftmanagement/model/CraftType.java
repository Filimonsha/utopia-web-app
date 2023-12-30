package com.isbd.utopiawebapp.craftmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CraftType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String craftName;
}
