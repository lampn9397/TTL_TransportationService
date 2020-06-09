package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.model.Vehicle;
import com.softech.cms.repository.UserRepository;


public interface VehicleService {

	void deleteAll();

	void deleteAll(Iterable<? extends Vehicle> entities);

	void delete(Vehicle entity);

	void deleteById(Integer id);

	long count();

	Iterable<Vehicle> findAllById(Iterable<Integer> ids);

	Iterable<Vehicle> findAll();

	boolean existsById(Integer id);

	Optional<Vehicle> findById(Integer id);

	<S extends Vehicle> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Vehicle> S save(S entity);

	Vehicle findByRoutetimeid(Integer routeTimeId);

	


}
