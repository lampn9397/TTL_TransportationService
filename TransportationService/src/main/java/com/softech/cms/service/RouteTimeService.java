package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface RouteTimeService {

	void deleteAll();

	void deleteAll(Iterable<? extends RouteTime> entities);

	void delete(RouteTime entity);

	void deleteById(Integer id);

	long count();

	Iterable<RouteTime> findAllById(Iterable<Integer> ids);

	Iterable<RouteTime> findAll();

	boolean existsById(Integer id);

	Optional<RouteTime> findById(Integer id);

	<S extends RouteTime> Iterable<S> saveAll(Iterable<S> entities);

	<S extends RouteTime> S save(S entity);

	List<RouteTime> findByRouteid(Integer routeid);

	



}
