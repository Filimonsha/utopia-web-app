package com.isbd.utopiawebapp.familyandcraft.familymanagement.dto;

import com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model.Building;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PersonsWithTheirMotherlandAndFamilyDTO {
    private String name;
    private String motherland;
    private String family;
//    TODO
    private String position;
    private List<Building> buildings;
}