package com.st.springboot.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.st.springboot.example.entity.PhoneBook;

@Repository
public interface PhoneBookRepository extends JpaRepository<PhoneBook, String> {

}
