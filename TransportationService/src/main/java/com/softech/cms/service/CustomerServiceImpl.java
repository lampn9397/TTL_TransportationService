package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	
	@Override
	public Customer findByEmail(String email) {
		return customerRepository.findByEmail(email);
	}

	@Override
	public <S extends Customer> S save(S entity) {
		return customerRepository.save(entity);
	}

	@Override
	public <S extends Customer> Iterable<S> saveAll(Iterable<S> entities) {
		return customerRepository.saveAll(entities);
	}

	@Override
	public Optional<Customer> findById(Integer id) {
		return customerRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return customerRepository.existsById(id);
	}

	@Override
	public Iterable<Customer> findAll() {
		return customerRepository.findAll();
	}

	@Override
	public Iterable<Customer> findAllById(Iterable<Integer> ids) {
		return customerRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return customerRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		customerRepository.deleteById(id);
	}

	@Override
	public void delete(Customer entity) {
		customerRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Customer> entities) {
		customerRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		customerRepository.deleteAll();
	}

	
	
}
