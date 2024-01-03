package com.isbd.utopiawebapp.familyandcraft.familymanagement.utils;

import com.isbd.utopiawebapp.familyandcraft.familymanagement.model.Person;
import org.springframework.data.jpa.domain.Specification;

public class PersonFieldsSpecification<T> {

    public static Specification<Person> isFamilyNotNull() {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.isNotNull(root.get("family"));
    }

    public static Specification<Person> setFieldSizeGreaterThan(int size) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.greaterThan(criteriaBuilder.size(root.get("personPositionHistory")), size);
    }
}