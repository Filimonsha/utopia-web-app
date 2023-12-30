package com.isbd.utopiawebapp.familymanagement.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PersonsWithTheirMotherlandAndFamilyDTO {
    private String name;
    private String motherland;
    private String family;
//    TODO
    private String position;
}
