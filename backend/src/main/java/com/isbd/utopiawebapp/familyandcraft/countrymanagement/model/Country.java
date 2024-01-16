package com.isbd.utopiawebapp.familyandcraft.countrymanagement.model;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;


//TODO
@Entity
@Data
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToMany(mappedBy = "groupCountries")
    private Set<EventGroup> eventGroupSet;

}
