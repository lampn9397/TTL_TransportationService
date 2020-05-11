package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class CityServiceImpl implements CityService {

	@Autowired
	private CityRepository cityRepository;

	@Override
	public <S extends City> S save(S entity) {
		return cityRepository.save(entity);
	}

	@Override
	public <S extends City> Iterable<S> saveAll(Iterable<S> entities) {
		return cityRepository.saveAll(entities);
	}

	@Override
	public Optional<City> findById(Integer id) {
		return cityRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return cityRepository.existsById(id);
	}

	@Override
	public Iterable<City> findAll() {
		return cityRepository.findAll();
	}

	@Override
	public Iterable<City> findAllById(Iterable<Integer> ids) {
		return cityRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return cityRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		cityRepository.deleteById(id);
	}

	@Override
	public void delete(City entity) {
		cityRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends City> entities) {
		cityRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		cityRepository.deleteAll();
	}

	
}
