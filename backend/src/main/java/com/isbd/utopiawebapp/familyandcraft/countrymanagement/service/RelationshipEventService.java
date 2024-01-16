package com.isbd.utopiawebapp.familyandcraft.countrymanagement.service;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.RelationshipEventWithGroupsAndPoliticalStatusesDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository.CountryRelationshipEventHistoryRepository;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository.CountryRepository;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.repository.EventGroupRepository;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.utils.CountryRelationshipEventHistorySpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RelationshipEventService {
    @Autowired
    private EventGroupRepository eventGroupRepository;

    @Autowired
    private CountryRelationshipEventHistoryRepository countryRelationshipEventHistoryRepository;

    public Page<RelationshipEventWithGroupsAndPoliticalStatusesDTO> getRelationshipEventsWithGroupsAndPoliticalStatuses(int pageNumber, int pageSize) {
        Specification<CountryRelationshipEventHistory> specification = Specification.where(
                CountryRelationshipEventHistorySpecification
                        .isEventStartToday()
        );
        Page<CountryRelationshipEventHistory> originalPage = countryRelationshipEventHistoryRepository.findAll(specification, PageRequest.of(pageNumber, pageSize));

        return originalPage.map(relationshipEvent -> {
//            Set<CountryRelationshipEventHistory> countryRelationshipEventHistory = countryRelationshipEventHistoryRepository.findAllByPoliticalStatusNameEquals();

            return RelationshipEventWithGroupsAndPoliticalStatusesDTO.builder()
                    .id(relationshipEvent.getId())
                    .politicalStatus(relationshipEvent.getPoliticalStatus())
                    .startEventDate(relationshipEvent.getStartEventDate())
                    .endEventDate(relationshipEvent.getEndEventDate())
                    .eventGroups(relationshipEvent.getEventGroups())
                    .build();
        });
    }
}
