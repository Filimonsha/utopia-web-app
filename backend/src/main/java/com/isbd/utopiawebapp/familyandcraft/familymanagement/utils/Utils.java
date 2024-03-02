package com.isbd.utopiawebapp.familyandcraft.familymanagement.utils;

import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.PersonPositionHistory;
import com.isbd.utopiawebapp.familyandcraft.craftmanagement.model.Position;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public class Utils {

    public static Position findPersonCurrentPosition(Set<PersonPositionHistory> personPositionHistorySet){

        Optional<PersonPositionHistory> currentPositionHistory = personPositionHistorySet.stream().min(Comparator.comparing(PersonPositionHistory::getHireDate));
        if (currentPositionHistory.isEmpty()){
            return null;
        } else {
            return currentPositionHistory.get().getPosition();
        }
    }
    public static Position findPersonPrevPosition(Set<PersonPositionHistory> personPositionHistorySet) {
        List<PersonPositionHistory> sortedPersonPositionHistoryList = personPositionHistorySet.stream().sorted(Comparator.comparing(PersonPositionHistory::getHireDate)).toList();

                 Position prevPosition = sortedPersonPositionHistoryList.size() >= 2
                         ? sortedPersonPositionHistoryList.get(1).getPosition()
                         : null;;
        return prevPosition;
    }
}
