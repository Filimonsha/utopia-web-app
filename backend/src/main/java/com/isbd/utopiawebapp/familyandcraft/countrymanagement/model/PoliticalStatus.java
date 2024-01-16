package com.isbd.utopiawebapp.familyandcraft.countrymanagement.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class PoliticalStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    @OneToMany(mappedBy = "politicalStatus")
    private Set<CountryRelationshipEventHistory> countryRelationshipEventHistory;
}
