package com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.EventGroup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Set;

@RepositoryRestResource
public interface EventGroupRepository extends PagingAndSortingRepository<EventGroup,Long>, CrudRepository<EventGroup,Long> {
    Set<EventGroup> findEventGroupByGroupCountriesId(long eventGroupId);
    Set<EventGroup> findEventGroupByCountryRelationshipEventHistoriesId(long countryRelationshipEventId);
}
