package com.isbd.utopiawebapp.familyandcraft.countrymanagement.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CountryDTO {
    private long id;
    private String name;
}
