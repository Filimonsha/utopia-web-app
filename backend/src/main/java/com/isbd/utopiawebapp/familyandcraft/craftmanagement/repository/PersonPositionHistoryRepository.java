package com.isbd.utopiawebapp.familyandcraft.craftmanagement.repository;

import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.PersonPositionHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Set;

public interface PersonPositionHistoryRepository extends PagingAndSortingRepository<PersonPositionHistory,Long>,CrudRepository<PersonPositionHistory,Long> {
    Set<PersonPositionHistory> findAllByPersonId(long personId);
}
