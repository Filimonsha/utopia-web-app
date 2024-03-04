package com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto;

import com.isbd.utopiawebapp.familyandcraft.countrymanagement.model.Country;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class EventGroupsWithCountriesDTO {
    private long id;
    private String name;
    private Set<CountryDTO> groupCountries;
}
