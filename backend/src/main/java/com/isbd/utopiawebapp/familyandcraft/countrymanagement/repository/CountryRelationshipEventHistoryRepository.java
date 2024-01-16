package com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.PoliticalStatus;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Set;

@RepositoryRestResource
public interface CountryRelationshipEventHistoryRepository extends PagingAndSortingRepository<CountryRelationshipEventHistory,Long>, CrudRepository<CountryRelationshipEventHistory,Long> {
    Page<CountryRelationshipEventHistory> findAll(Pageable pageable);
    Page<CountryRelationshipEventHistory> findAllByPoliticalStatusNameEquals(String politicalStatusName, Pageable pageable);
    Set<CountryRelationshipEventHistory> findCountryRelationshipEventHistoriesByEventGroupsId(long eventGroupId);
    Set<CountryRelationshipEventHistory> findCountryRelationshipEventHistoryByPoliticalStatusId(long politicalStatusId);
}

