package com.isbd.utopiawebapp.familyandcraft.countrymanagement.controller;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.CountryRelationshipEventHistoryRequest;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.RelationshipEventWithGroupsAndPoliticalStatusesDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.service.RelationshipEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CountryRelationshipEventController {
    @Autowired
    private RelationshipEventService relationshipEventService;

    @GetMapping("/countryRelationshipEventHistories")
    public Page<RelationshipEventWithGroupsAndPoliticalStatusesDTO> getCustomCountryRelationshipEvents(@RequestParam("page") int page, @RequestParam("size") int size) {
        return relationshipEventService.getRelationshipEventsWithGroupsAndPoliticalStatuses(page, size);
    }

//    @PostMapping("countryRelationshipEventHistories")
//    public void setCustomCountryRelationshipEvent(@RequestBody CountryRelationshipEventHistoryRequest countryRelationshipEventRequest) {
//        relationshipEventService.addRelationshipEvents(countryRelationshipEventRequest);
//    }
}
