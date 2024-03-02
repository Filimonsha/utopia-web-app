package com.isbd.utopiawebapp.familyandcraft.familymanagement.model;

import com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model.Building;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.PersonPositionHistory;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

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
//    Указание созданной таблицы для relation
    @JoinTable(
            name = "people_detachment_to_building",
            joinColumns = @JoinColumn(name = "person_id"),
            inverseJoinColumns = @JoinColumn(name = "building_id")
    )
    private Set<Building> buildings;

    @OneToMany(mappedBy = "person")
    private Set<PersonPositionHistory> personPositionHistory;
}
