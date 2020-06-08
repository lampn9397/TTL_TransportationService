package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.FAQ;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface FAQService {

	void deleteAll();

	void deleteAll(Iterable<? extends FAQ> entities);

	void delete(FAQ entity);

	void deleteById(Integer id);

	long count();

	Iterable<FAQ> findAllById(Iterable<Integer> ids);

	Iterable<FAQ> findAll();

	boolean existsById(Integer id);

	Optional<FAQ> findById(Integer id);

	<S extends FAQ> Iterable<S> saveAll(Iterable<S> entities);

	<S extends FAQ> S save(S entity);

}
