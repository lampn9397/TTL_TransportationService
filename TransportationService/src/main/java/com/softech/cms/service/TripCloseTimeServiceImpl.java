package com.softech.cms.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.TripCloseTime;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.TripCloseTimeRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class TripCloseTimeServiceImpl implements TripCloseTimeService {

	@Autowired
	private TripCloseTimeRepository closeTimeRepository;

	@Override
	public List<TripCloseTime> findByClosedate(Date closedate) {
		return closeTimeRepository.findByClosedate(closedate);
	}

	@Override
	public <S extends TripCloseTime> S save(S entity) {
		return closeTimeRepository.save(entity);
	}

	@Override
	public <S extends TripCloseTime> Iterable<S> saveAll(Iterable<S> entities) {
		return closeTimeRepository.saveAll(entities);
	}

	@Override
	public Optional<TripCloseTime> findById(Integer id) {
		return closeTimeRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return closeTimeRepository.existsById(id);
	}

	@Override
	public Iterable<TripCloseTime> findAll() {
		return closeTimeRepository.findAll();
	}

	@Override
	public Iterable<TripCloseTime> findAllById(Iterable<Integer> ids) {
		return closeTimeRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return closeTimeRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		closeTimeRepository.deleteById(id);
	}

	@Override
	public void delete(TripCloseTime entity) {
		closeTimeRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends TripCloseTime> entities) {
		closeTimeRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		closeTimeRepository.deleteAll();
	}


	
}
