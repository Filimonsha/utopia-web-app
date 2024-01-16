package com.isbd.utopiawebapp.familyandcraft.countrymanagement.service;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.CountryDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.EventGroupsWithCountriesDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto.RelationshipEventWithGroupsAndPoliticalStatusesDTO;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.CountryRelationshipEventHistory;
import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.EventGroup;
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
import java.util.stream.Collectors;

@Service
public class RelationshipEventService {
    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private EventGroupRepository eventGroupRepository;

    @Autowired
    private CountryRelationshipEventHistoryRepository countryRelationshipEventHistoryRepository;

    public Page<RelationshipEventWithGroupsAndPoliticalStatusesDTO> getRelationshipEventsWithGroupsAndPoliticalStatuses(int pageNumber, int pageSize) {
//        Specification<CountryRelationshipEventHistory> specification = Specification.where(
//                CountryRelationshipEventHistorySpecification
//                        .isEventStartToday()
//        );
        Page<CountryRelationshipEventHistory> originalPage = countryRelationshipEventHistoryRepository.findAll(PageRequest.of(pageNumber, pageSize));

        return originalPage.map(relationshipEvent -> {
            Set<EventGroup> eventGroups = eventGroupRepository.findEventGroupByCountryRelationshipEventHistoriesId(relationshipEvent.getId());
            Set<EventGroupsWithCountriesDTO> eventGroupsWithCountries = getEventGroupsWithCountries(eventGroups);

            return RelationshipEventWithGroupsAndPoliticalStatusesDTO.builder()
                    .id(relationshipEvent.getId())
                    .politicalStatus(relationshipEvent.getPoliticalStatus())
                    .startEventDate(relationshipEvent.getStartEventDate())
                    .endEventDate(relationshipEvent.getEndEventDate())
                    .eventGroups(eventGroupsWithCountries)
                    .build();
        });
    }

    public Set<EventGroupsWithCountriesDTO> getEventGroupsWithCountries(Set<EventGroup> eventGroup) {
        return eventGroup.stream().map(group -> {
            Set<Country> eventGroupCountries = countryRepository.findCountriesByEventGroupSetId(group.getId());
            Set<CountryDTO> countryDTOSet = eventGroupCountries.stream().map(country -> {
                return CountryDTO.builder()
                        .id(country.getId())
                        .name(country.getName())
                        .build();
            }).collect(Collectors.toSet());
            return EventGroupsWithCountriesDTO.builder()
                    .id(group.getId())
                    .name(group.getName())
                    .groupCountries(countryDTOSet)
                    .build();
        }).collect(Collectors.toSet());
    }
}
