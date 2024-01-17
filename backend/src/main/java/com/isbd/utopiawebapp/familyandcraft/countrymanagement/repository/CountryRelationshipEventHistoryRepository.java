package com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.PoliticalStatus;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.beans.Transient;
import java.util.Set;

@RepositoryRestResource
public interface CountryRelationshipEventHistoryRepository extends PagingAndSortingRepository<CountryRelationshipEventHistory,Long>, CrudRepository<CountryRelationshipEventHistory,Long> {
    Page<CountryRelationshipEventHistory> findAll(Pageable pageable);
    Page<CountryRelationshipEventHistory> findAllByPoliticalStatusNameEquals(String politicalStatusName, Pageable pageable);
    Set<CountryRelationshipEventHistory> findCountryRelationshipEventHistoriesByEventGroupsId(long eventGroupId);
    Set<CountryRelationshipEventHistory> findCountryRelationshipEventHistoryByPoliticalStatusId(long politicalStatusId);
    CountryRelationshipEventHistory findCountryRelationshipEventHistoryById(long countryRelationshipEventHistoryId);

//    @Procedure(procedureName = "insert_country_relationship_event")
    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "SELECT insert_country_relationship_event(:political_status_name, :event_start_date, :event_groups_id_array)")
    void addCountryRelationshipEvent(@Param("political_status_name") String political_status_name,  @Param("event_start_date") java.sql.Date event_start_date, @Param("event_groups_id_array") int[] event_groups_id_array);
}

