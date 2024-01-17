package com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;

import java.sql.Date;

public record CountryRelationshipEventHistoryRequest(String politicalStatusName, Date eventStartDate, int[] eventGroupsId) {
    public static CountryRelationshipEventHistoryRequest fromEntity(CountryRelationshipEventHistory event) {
        return new CountryRelationshipEventHistoryRequest(event.getPoliticalStatus().getName(),
                event.getStartEventDate(), event.getEventGroups().stream().mapToInt(group -> {
            return Math.toIntExact(group.getId());
        }).toArray());
    }

    ;
}
