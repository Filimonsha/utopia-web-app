package com.isbd.utopiawebapp.familymanagement.repository;

import com.isbd.utopiawebapp.familymanagement.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PersonRepository extends PagingAndSortingRepository<Person,Long> {
    Page<Person> findAll(Pageable pageable);
}
