package com.example.employee.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.model.Employee;
import com.example.employee.services.EmployeeService;

@CrossOrigin(originPatterns = {"http://localhost:3000"})
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
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
}
