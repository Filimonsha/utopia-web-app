package com.isbd.utopiawebapp.familyandcraft.countrymanagement.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.Set;

@Entity
@Data
public class CountryRelationshipEventHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private PoliticalStatus politicalStatus;

    private Date startEventDate;
    private Date endEventDate;

    @ManyToMany
    @JoinTable(
            name = "event_groups",
            joinColumns = @JoinColumn(name = "event_group_id"),
            inverseJoinColumns = @JoinColumn(name = "id")
    )
    private Set<EventGroup> eventGroups;

}
