package com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.EventGroup;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.PoliticalStatus;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;
import java.util.Set;

@Data
@Builder
public class RelationshipEventWithGroupsAndPoliticalStatusesDTO {
    private long id;
    private PoliticalStatus politicalStatus;
    private Date startEventDate;
    private Date endEventDate;
    private Set<EventGroup> eventGroups;
}