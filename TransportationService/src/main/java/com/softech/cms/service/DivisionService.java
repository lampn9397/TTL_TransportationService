package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.FAQ;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface DivisionService {

	void deleteAll();

	void deleteAll(Iterable<? extends Division> entities);

	void delete(Division entity);

	void deleteById(Integer id);

	long count();

	Iterable<Division> findAllById(Iterable<Integer> ids);

	Iterable<Division> findAll();

	boolean existsById(Integer id);

	Optional<Division> findById(Integer id);

	<S extends Division> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Division> S save(S entity);

	


}
