package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Route;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface RouteService {

	void deleteAll();

	void deleteAll(Iterable<? extends Route> entities);

	void delete(Route entity);

	void deleteById(Integer id);

	long count();

	Iterable<Route> findAllById(Iterable<Integer> ids);

	Iterable<Route> findAll();

	boolean existsById(Integer id);

	Optional<Route> findById(Integer id);

	<S extends Route> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Route> S save(S entity);

	List<Route> findByStart(Integer id);

	Route findByStartAndDestination(Integer start, Integer end);

	
	
}
