package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.TicketRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepository ticketRepository;
	
	
	
	public List<Ticket> findByCustomerIdOrderByCreatedDate(Integer customerId) {
		return ticketRepository.findByCustomerIdOrderByCreatedDate(customerId);
	}

	@Override
	public List<Ticket> findByCustomerId(Integer customerId) {
		return ticketRepository.findByCustomerId(customerId);
	}

	@Override
	public List<Ticket> findByRoutetimeid(Integer routetimeid) {
		return ticketRepository.findByRoutetimeid(routetimeid);
	}

	@Override
	public <S extends Ticket> S save(S entity) {
		return ticketRepository.save(entity);
	}

	@Override
	public <S extends Ticket> Iterable<S> saveAll(Iterable<S> entities) {
		return ticketRepository.saveAll(entities);
	}

	@Override
	public Optional<Ticket> findById(Integer id) {
		return ticketRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return ticketRepository.existsById(id);
	}

	@Override
	public Iterable<Ticket> findAll() {
		return ticketRepository.findAll();
	}

	@Override
	public Iterable<Ticket> findAllById(Iterable<Integer> ids) {
		return ticketRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return ticketRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		ticketRepository.deleteById(id);
	}

	@Override
	public void delete(Ticket entity) {
		ticketRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Ticket> entities) {
		ticketRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		ticketRepository.deleteAll();
	}

	@Override
	public List<Ticket> findByRouteTimeAndDate(Integer routetimeid, Date date) {
		return ticketRepository.findByRouteTimeAndDate(routetimeid, date);
	}

	@Override
	public List<Ticket> findByRouteTimeAndDateAndVehicle(Integer routeTimeId, Date dateStart, Integer vehicleId) {
		return ticketRepository.findByRouteTimeAndDateAndVehicle(routeTimeId, dateStart, vehicleId);
	}

	

		
}
