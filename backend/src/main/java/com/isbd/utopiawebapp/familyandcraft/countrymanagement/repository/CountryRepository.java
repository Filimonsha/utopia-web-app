package com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CountryRepository extends CrudRepository<Country,Long>  {
    Set<Country> findCountriesByEventGroupSetId(long groupId);
}
