package com.isbd.utopiawebapp.familymanagement.service;

import com.isbd.utopiawebapp.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import com.isbd.utopiawebapp.familymanagement.model.Person;
import com.isbd.utopiawebapp.familymanagement.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getPersonsWithTheirMotherlandAndFamily (Pageable pageable) {
        Page<Person> originalPage = personRepository.findAll(pageable);

        return originalPage.map(person -> PersonsWithTheirMotherlandAndFamilyDTO.builder()
                .name(person.getName())
                .family("TODO family")
                .motherland(person.getMotherland().getName())
                .position("TODO position").build()
        );
    }
}