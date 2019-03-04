package com.st.springboot.example.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.st.springboot.example.entity.PhoneBook;
import com.st.springboot.example.service.PhoneBookService;

@RestController
public class PhoneBookControl {

	@Autowired
	private PhoneBookService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/api/phonebooks")
	public List<PhoneBook> retrieveDetails() {
		return service.retrieveDetails();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/api/phonebook"){
		return service.retrieveDetails();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/api/phonebook/{phoneNumber}")
	public PhoneBook getDetails(@PathVariable(name = "phoneNumber") String phoneNumber) {
		return service.getDetails(phoneNumber);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/api/phonebook")
	public void savePhoneBook(@RequestBody PhoneBook phoneBook) {
		service.savePhoneBook(phoneBook);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/api/phonebook/{phoneNumber}")
	public void updatePhoneBook(@RequestBody PhoneBook phoneBook,
			@PathVariable(name = "phoneNumber") String phoneNumber) {
		PhoneBook book = service.getDetails(phoneNumber);
		if (book != null) {
			service.updatePhoneBook(phoneBook);
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/api/phonebook/{phoneNumber}")
	public void deleteEmployee(@PathVariable(name = "phoneNumber") String phoneNumber) {
		service.deletePhoneBook(phoneNumber);
	}

}
