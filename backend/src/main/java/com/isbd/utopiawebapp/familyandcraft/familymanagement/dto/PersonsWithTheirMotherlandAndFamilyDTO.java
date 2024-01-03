package com.isbd.utopiawebapp.familyandcraft.familymanagement.dto;

import com.isbd.utopiawebapp.familyandcraft.buildingmanagement.model.Building;
import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.Position;
import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Family;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class PersonsWithTheirMotherlandAndFamilyDTO {

    private long id;
    private String name;
    private String motherland;
    private Family family;
//    TODO
    private Position position;
    private Position prevPosition;
    private Set<Building> buildings;
}