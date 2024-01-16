package com.isbd.utopiawebapp.familyandcraft.countrymanagement.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class EventGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToMany
    @JoinTable(
            name = "event_group_countries",
            joinColumns = @JoinColumn(name = "group_id"),
            inverseJoinColumns = @JoinColumn(name = "country_id")
    )
    private Set<Country> groupCountries;

    @ManyToMany(mappedBy = "eventGroups")
    private Set<CountryRelationshipEventHistory> countryRelationshipEventHistories;
}
