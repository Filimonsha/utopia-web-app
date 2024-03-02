package com.isbd.utopiawebapp.familyandcraft.craftmanagement.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToMany(mappedBy = "position")
    private Set<PersonPositionHistory> personPositionHistory;

    @ManyToMany
    @JoinTable(name = "position_craft_type_relation")
    private Set<CraftType> craftType;

}
