package com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private BuildingType buildingType;
}

