package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.RouteTimeRepository;
import com.softech.cms.repository.TicketRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class RouteTimeServiceImpl implements RouteTimeService {

	@Autowired	
	private RouteTimeRepository routeTimeRepository;

	@Override
	public List<RouteTime> findByRouteid(Integer routeid) {
		return routeTimeRepository.findByRouteid(routeid);
	}

	@Override
	public <S extends RouteTime> S save(S entity) {
		return routeTimeRepository.save(entity);
	}

	@Override
	public <S extends RouteTime> Iterable<S> saveAll(Iterable<S> entities) {
		return routeTimeRepository.saveAll(entities);
	}

	@Override
	public Optional<RouteTime> findById(Integer id) {
		return routeTimeRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return routeTimeRepository.existsById(id);
	}

	@Override
	public Iterable<RouteTime> findAll() {
		return routeTimeRepository.findAll();
	}

	@Override
	public Iterable<RouteTime> findAllById(Iterable<Integer> ids) {
		return routeTimeRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return routeTimeRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		routeTimeRepository.deleteById(id);
	}

	@Override
	public void delete(RouteTime entity) {
		routeTimeRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends RouteTime> entities) {
		routeTimeRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		routeTimeRepository.deleteAll();
	}

	
}
