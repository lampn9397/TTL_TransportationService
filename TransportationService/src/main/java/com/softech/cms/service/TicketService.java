package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;


public interface TicketService {

	void deleteAll();

	void deleteAll(Iterable<? extends Ticket> entities);

	void delete(Ticket entity);

	void deleteById(Integer id);

	long count();

	Iterable<Ticket> findAllById(Iterable<Integer> ids);

	Iterable<Ticket> findAll();

	boolean existsById(Integer id);
	
	List<Ticket> findByCustomerId(Integer customerId);

	Optional<Ticket> findById(Integer id);

	<S extends Ticket> Iterable<S> saveAll(Iterable<S> entities);

	<S extends Ticket> S save(S entity);

	List<Ticket> findByRoutetimeid(Integer i);

	List<Ticket> findByRouteTimeAndDate(Integer routetimeid, Date date);

	List<Ticket> findByRouteTimeAndDateAndVehicle(Integer routeTimeId, Date dateStart, Integer vehicleId);

	List<Ticket> findByCustomerIdOrderByCreatedDate(Integer customerId);


}
