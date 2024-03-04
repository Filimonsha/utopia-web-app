package com.isbd.utopiawebapp.familyandcraft.countrymanagement.utils;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import org.springframework.data.jpa.domain.Specification;

import java.util.Date;

public class CountryRelationshipEventHistorySpecification<T> {
    public static Specification<CountryRelationshipEventHistory> isEventStartToday() {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("startEventDate"), new java.sql.Date(new Date().getTime()));
    }
}
