package com.isbd.utopiawebapp.familymanagement.model;

import com.isbd.utopiawebapp.countrymanagement.model.Country;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToOne
    private Country motherland;

    @ManyToOne(targetEntity = Family.class)
    private Family family;
}
