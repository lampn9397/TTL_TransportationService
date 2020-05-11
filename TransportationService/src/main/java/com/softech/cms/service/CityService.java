package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface CityService {

	void deleteAll();

	void deleteAll(Iterable<? extends City> entities);

	void delete(City entity);

	void deleteById(Integer id);

	long count();

	Iterable<City> findAllById(Iterable<Integer> ids);

	Iterable<City> findAll();

	boolean existsById(Integer id);

	Optional<City> findById(Integer id);

	<S extends City> Iterable<S> saveAll(Iterable<S> entities);

	<S extends City> S save(S entity);


}
