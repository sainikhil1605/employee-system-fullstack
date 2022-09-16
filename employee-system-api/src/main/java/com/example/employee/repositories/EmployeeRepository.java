package com.example.employee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee.entity.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {

}
