package com.isbd.utopiawebapp.familyandcraft.countrymanagement.model;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import jakarta.persistence.*;
import lombok.Data;


//TODO
@Entity
@Data
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToOne()
    @JoinColumn(name = "leader_id", referencedColumnName = "id")
    private Person leader;

}
