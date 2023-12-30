package com.isbd.utopiawebapp.familymanagement.controller;

import com.isbd.utopiawebapp.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import com.isbd.utopiawebapp.familymanagement.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @Autowired
    private PersonService personService;

//    public CustomController(PersonRepository personRepository) {
//        this.personRepository = personRepository;
//    }

    @GetMapping("/persons")
    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getCustomPeople(Pageable pageable) {
        return personService.getPersonsWithTheirMotherlandAndFamily(pageable);
    }
}