package com.isbd.utopiawebapp.familyandcraft.craftmanagement.model;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Data
public class PersonPositionHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
//    @MapsId("personId")
    private Person person;

    @ManyToOne
//    @MapsId("categoryId")
    private Position position;

    private Timestamp hireDate;

    private Timestamp dismissalDate;
}
