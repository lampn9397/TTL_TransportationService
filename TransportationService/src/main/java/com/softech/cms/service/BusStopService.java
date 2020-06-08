package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface BusStopService {

	void deleteAll();

	void deleteAll(Iterable<? extends BusStop> entities);

	void delete(BusStop entity);

	void deleteById(Integer id);

	long count();

	Iterable<BusStop> findAllById(Iterable<Integer> ids);

	Iterable<BusStop> findAll();

	boolean existsById(Integer id);

	Optional<BusStop> findById(Integer id);

	<S extends BusStop> Iterable<S> saveAll(Iterable<S> entities);

	<S extends BusStop> S save(S entity);

	List<BusStop> findByCityid(Integer cityid);

	


}
