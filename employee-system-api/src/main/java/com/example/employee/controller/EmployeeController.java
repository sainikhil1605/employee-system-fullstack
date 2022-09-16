package com.example.employee.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.Employee;
import com.example.employee.services.EmployeeService;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	private EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	@PostMapping("employees")
	public Employee creatEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
}
