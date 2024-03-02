package com.isbd.utopiawebapp.familyandcraft.familymanagement.model;

import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.CraftType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private CraftType craftType;

    private Integer responsiblePersonId;

}
