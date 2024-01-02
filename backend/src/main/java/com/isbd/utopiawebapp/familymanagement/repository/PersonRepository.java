package com.isbd.utopiawebapp.familymanagement.repository;

import com.isbd.utopiawebapp.familymanagement.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PersonRepository extends PagingAndSortingRepository<Person,Long>, CrudRepository<Person,Long> {
    Page<Person> findAll(Pageable pageable);
}
