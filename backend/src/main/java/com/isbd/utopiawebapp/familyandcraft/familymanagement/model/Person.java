package com.isbd.utopiawebapp.familyandcraft.familymanagement.model;

import com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model.Building;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToOne
    private Country motherland;

    @ManyToOne
    private Family family;

    @ManyToMany
    @JoinTable(
            name = "people_detachment_to_building",
            joinColumns = @JoinColumn(name = "person_id"),
            inverseJoinColumns = @JoinColumn(name = "building_id")
    )
    private List<Building> buildings;
}
