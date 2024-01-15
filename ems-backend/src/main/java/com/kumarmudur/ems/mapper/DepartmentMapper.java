package com.kumarmudur.ems.mapper;

import com.kumarmudur.ems.dto.DepartmentDto;
import com.kumarmudur.ems.entity.Department;

public class DepartmentMapper {
    // convert department jpa entity into department dto
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // convert department dto into department jpa entity
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        return new DepartmentDto(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}