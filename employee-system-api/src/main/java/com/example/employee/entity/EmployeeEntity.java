package com.example.employee.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="employees")
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String firstName;
	private String lastName;
	private String emailId;
}
