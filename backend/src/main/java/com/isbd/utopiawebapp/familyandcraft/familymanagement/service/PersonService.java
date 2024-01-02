package com.isbd.utopiawebapp.familyandcraft.familymanagement.service;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.repository.PersonRepository;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getPersonsWithTheirMotherlandAndFamily (int pageNumber,int pageSize) {
        Page<Person> originalPage = personRepository.findAll(PageRequest.of(pageNumber,pageSize));

        return originalPage.map(person -> PersonsWithTheirMotherlandAndFamilyDTO.builder()
                .name(person.getName())
                .family("TODO family")
                .motherland(person.getMotherland().getName())
                .position("TODO position")
                .buildings(person.getBuildings())
                .build()
        );
    }
}