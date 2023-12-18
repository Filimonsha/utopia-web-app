package com.isbd.utopiawebapp.personmanagement.repository;

import com.isbd.utopiawebapp.personmanagement.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource
public interface PersonRepository extends CrudRepository<Person,Long> {
}
