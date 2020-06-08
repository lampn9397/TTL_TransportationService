package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Trip;
import com.softech.cms.model.User;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.TripRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class TripServiceImpl implements TripService {

	@Autowired
	private TripRepository tripRepository;
	
	

	@Override
	public Trip findByRouteIdAndDateStart(Integer routeid, Date datestart) {
		return tripRepository.findByRouteIdAndDateStart(routeid, datestart);
	}

	@Override
	public List<Trip> findByRouteid(Integer routeid) {
		return tripRepository.findByRouteid(routeid);
	}

	@Override
	public <S extends Trip> S save(S entity) {
		return tripRepository.save(entity);
	}

	@Override
	public <S extends Trip> Iterable<S> saveAll(Iterable<S> entities) {
		return tripRepository.saveAll(entities);
	}

	@Override
	public Optional<Trip> findById(Integer id) {
		return tripRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return tripRepository.existsById(id);
	}

	@Override
	public Iterable<Trip> findAll() {
		return tripRepository.findAll();
	}

	@Override
	public Iterable<Trip> findAllById(Iterable<Integer> ids) {
		return tripRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return tripRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		tripRepository.deleteById(id);
	}

	@Override
	public void delete(Trip entity) {
		tripRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Trip> entities) {
		tripRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		tripRepository.deleteAll();
	}

	
}
