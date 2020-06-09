package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface UserService {

	void deleteAll();

	void deleteAll(Iterable<? extends User> entities);

	void delete(User entity);

	void deleteById(Integer id);

	long count();

	Iterable<User> findAllById(Iterable<Integer> ids);

	Iterable<User> findAll();

	boolean existsById(Integer id);

	Optional<User> findById(Integer id);

	<S extends User> Iterable<S> saveAll(Iterable<S> entities);

	<S extends User> S save(S entity);

	User findByusername(String username);

	User findByVerifycode(String code);

	User findByCusid(Customer cusid);	

	
}
