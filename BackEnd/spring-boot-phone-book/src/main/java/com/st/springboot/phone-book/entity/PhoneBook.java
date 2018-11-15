package com.st.springboot.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
@Table(name="Phone_Book")
public class PhoneBook {

	@Id
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@NotEmpty
	@Column(name = "first_name")
	private String firstName;
	
	@NotEmpty
	@Column(name = "last_name")
	private String lastname;
	
	@NotEmpty
	@Column(name = "work_phone")
	private String workphone;
	
	@NotEmpty
	@Column(name = "address")
	private String address;
	
	@Column(name = "company_name")
	private String company;
	
	@NotEmpty
	@Column(name = "email_address")
	private String email;
	
}
