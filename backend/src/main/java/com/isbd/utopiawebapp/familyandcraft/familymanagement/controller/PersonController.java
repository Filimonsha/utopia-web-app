package com.isbd.utopiawebapp.familyandcraft.familymanagement.controller;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("/persons")
    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getCustomPeople(@RequestParam("page") int page, @RequestParam("size") int size) {
        return personService.getPersonsWithTheirMotherlandAndFamily(page,size);
    }
}