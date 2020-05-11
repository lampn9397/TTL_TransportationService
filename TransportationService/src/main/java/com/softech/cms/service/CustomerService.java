package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface CustomerService {

	void deleteAll();

	void deleteAll(Iterable<? extends Customer> entities);

	void delete(Customer entity);

	void deleteById(Integer id);

	long count();

	Iterable<Customer> findAllById(Iterable<Integer> ids);

	Iterable<Customer> findAll();

	boolean existsById(Integer id);

	Optional<Customer> findById(Integer id);

	<S extends Customer> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Customer> S save(S entity);

	Customer findByEmail(String email);

	
}
