package com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class BuildingType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String typeName;
}
