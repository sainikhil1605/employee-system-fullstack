package com.example.employee.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.example.employee.entity.EmployeeEntity;
import com.example.employee.model.Employee;
import com.example.employee.repositories.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}

	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity  employeeEntity=new EmployeeEntity();
		BeanUtils.copyProperties(employee, employeeEntity);
		employeeRepository.save(employeeEntity);
		return employee;
	}
	
}
