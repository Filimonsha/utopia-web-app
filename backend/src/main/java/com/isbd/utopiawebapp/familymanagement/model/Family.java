package com.isbd.utopiawebapp.familymanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

//    TODO Artemi
    private Integer craftTypeId;

    private Integer responsiblePersonId;
}
