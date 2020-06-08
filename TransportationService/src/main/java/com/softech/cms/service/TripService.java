package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Trip;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface TripService {

	void deleteAll();

	void deleteAll(Iterable<? extends Trip> entities);

	void delete(Trip entity);

	void deleteById(Integer id);

	long count();

	Iterable<Trip> findAllById(Iterable<Integer> ids);

	Iterable<Trip> findAll();

	boolean existsById(Integer id);

	Optional<Trip> findById(Integer id);

	<S extends Trip> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Trip> S save(S entity);

	List<Trip> findByRouteid(Integer routeid);

	Trip findByRouteIdAndDateStart(Integer routeid, Date datestart);

	

}
