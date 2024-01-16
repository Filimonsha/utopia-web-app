package com.isbd.utopiawebapp.familyandcraft.familymanagement.service;

import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.PersonPositionHistory;
import com.isbd.utopiawebapp.familyandcraft.craftmanagement.repository.PersonPositionHistoryRepository;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.dto.PersonsWithTheirMotherlandAndFamilyDTO;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.repository.PersonRepository;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.utils.PersonFieldsSpecification;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonPositionHistoryRepository personPositionHistoryRepository;

    public Page<PersonsWithTheirMotherlandAndFamilyDTO> getPersonsWithTheirMotherlandAndFamily(int pageNumber, int pageSize) {
//        Specification<Person> specification = Specification.where(
//                PersonFieldsSpecification
//                        .setFieldSizeGreaterThan(0)
//                        .and(PersonFieldsSpecification.isFamilyNotNull())
//        );
        Page<Person> originalPage = personRepository.findAll(PageRequest.of(pageNumber, pageSize));

        return originalPage
                .map(person -> {
                    Set<PersonPositionHistory> personPositionHistory = personPositionHistoryRepository.findAllByPersonId(person.getId());

                    return PersonsWithTheirMotherlandAndFamilyDTO.builder()
                            .id(person.getId())
                            .name(person.getName())
                            .family(person.getFamily())
                            .motherland(person.getMotherland().getName())
                            .position(
                                    Utils.findPersonCurrentPosition(personPositionHistory)
                            )
                            .prevPosition(
                                    Utils.findPersonPrevPosition(personPositionHistory)
                            )
                            .buildings(person.getBuildings())
                            .build();
                }
        );
    }
}