package com.st.springboot.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.st.springboot.example.Repository.PhoneBookRepository;
import com.st.springboot.example.entity.PhoneBook;

@Service
public class PhoneBookService {

	@Autowired
	private PhoneBookRepository phoneBookRepository;

	public List<PhoneBook> retrieveDetails() {
		return (List<PhoneBook>) phoneBookRepository.findAll();
	}

	public PhoneBook getDetails(String phoneNumber) {
		Optional<PhoneBook> phoneBook = phoneBookRepository.findById(phoneNumber);
		return phoneBook.isPresent() ? phoneBook.get() : null;
	}

	public void savePhoneBook(PhoneBook phoneBook) {
		phoneBookRepository.saveAndFlush(phoneBook);
	}

	public void updatePhoneBook(PhoneBook phoneBook) {
		phoneBookRepository.saveAndFlush(phoneBook);
	}

	public void deletePhoneBook(String phoneNumber) {
		phoneBookRepository.deleteById(phoneNumber);
	}
}
