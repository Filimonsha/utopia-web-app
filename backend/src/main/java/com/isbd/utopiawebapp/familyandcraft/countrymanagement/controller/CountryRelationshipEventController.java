package com.isbd.utopiawebapp.familyandcraft.countrymanagement.controller;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.RelationshipEventWithGroupsAndPoliticalStatusesDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.service.RelationshipEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CountryRelationshipEventController {
    @Autowired
    private RelationshipEventService relationshipEventService;

    @GetMapping("/countryRelationshipEventHistory")
    public Page<RelationshipEventWithGroupsAndPoliticalStatusesDTO> getCustomCountryRelationshipEvents(@RequestParam("page") int page, @RequestParam("size") int size) {
        return relationshipEventService.getRelationshipEventsWithGroupsAndPoliticalStatuses(page, size);
    }
}
