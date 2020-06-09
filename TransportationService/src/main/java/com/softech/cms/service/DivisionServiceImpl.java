package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.FAQ;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.DivisionRepository;
import com.softech.cms.repository.TicketRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class DivisionServiceImpl implements DivisionService {

	@Autowired
	private DivisionRepository ticket2Repository;

	@Override
	public <S extends Division> S save(S entity) {
		return ticket2Repository.save(entity);
	}

	@Override
	public <S extends Division> Iterable<S> saveAll(Iterable<S> entities) {
		return ticket2Repository.saveAll(entities);
	}

	@Override
	public Optional<Division> findById(Integer id) {
		return ticket2Repository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return ticket2Repository.existsById(id);
	}

	@Override
	public Iterable<Division> findAll() {
		return ticket2Repository.findAll();
	}

	@Override
	public Iterable<Division> findAllById(Iterable<Integer> ids) {
		return ticket2Repository.findAllById(ids);
	}

	@Override
	public long count() {
		return ticket2Repository.count();
	}

	@Override
	public void deleteById(Integer id) {
		ticket2Repository.deleteById(id);
	}

	@Override
	public void delete(Division entity) {
		ticket2Repository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Division> entities) {
		ticket2Repository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		ticket2Repository.deleteAll();
	}

	

		
}
