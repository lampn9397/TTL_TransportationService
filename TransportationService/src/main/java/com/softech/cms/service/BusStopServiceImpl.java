package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class BusStopServiceImpl implements BusStopService {

	@Autowired
	private BusStopRepository busStopRepository;

	@Override
	public List<BusStop> findByCityid(Integer cityid) {
		return busStopRepository.findByCityid(cityid);
	}

	@Override
	public <S extends BusStop> S save(S entity) {
		return busStopRepository.save(entity);
	}

	@Override
	public <S extends BusStop> Iterable<S> saveAll(Iterable<S> entities) {
		return busStopRepository.saveAll(entities);
	}

	@Override
	public Optional<BusStop> findById(Integer id) {
		return busStopRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return busStopRepository.existsById(id);
	}

	@Override
	public Iterable<BusStop> findAll() {
		return busStopRepository.findAll();
	}

	@Override
	public Iterable<BusStop> findAllById(Iterable<Integer> ids) {
		return busStopRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return busStopRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		busStopRepository.deleteById(id);
	}

	@Override
	public void delete(BusStop entity) {
		busStopRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends BusStop> entities) {
		busStopRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		busStopRepository.deleteAll();
	}

	

	
}
