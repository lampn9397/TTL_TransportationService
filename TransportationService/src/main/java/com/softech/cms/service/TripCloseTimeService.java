package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.TripCloseTime;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface TripCloseTimeService {

	void deleteAll();

	void deleteAll(Iterable<? extends TripCloseTime> entities);

	void delete(TripCloseTime entity);

	void deleteById(Integer id);

	long count();

	Iterable<TripCloseTime> findAllById(Iterable<Integer> ids);

	Iterable<TripCloseTime> findAll();

	boolean existsById(Integer id);

	Optional<TripCloseTime> findById(Integer id);

	<S extends TripCloseTime> Iterable<S> saveAll(Iterable<S> entities);

	<S extends TripCloseTime> S save(S entity);

	List<TripCloseTime> findByClosedate(Date closedate);

	


}
