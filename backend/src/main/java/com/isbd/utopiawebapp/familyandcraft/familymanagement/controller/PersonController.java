package com.isbd.utopiawebapp.familyandcraft.familymanagement.controller;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Family;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("/persons")
    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getCustomPeople(@RequestParam("page") int page, @RequestParam("size") int size) {
        return personService.getPersonsWithTheirMotherlandAndFamily(page, size);
    }

    @PostMapping("/changeFamily")
    public Family changePersonFamily(@RequestParam("personId") Long personId, @RequestParam("familyId") Long familyId) {
        return personService.changePersonFamily(personId, familyId);
    }
}