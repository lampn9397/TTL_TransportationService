package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.User;
import com.softech.cms.model.Vehicle;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.UserRepository;
import com.softech.cms.repository.VehicleRepository;

@Service
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;

	@Override
	public Vehicle findByRoutetimeid(Integer routeTimeId) {
		return vehicleRepository.findByRoutetimeid(routeTimeId);
	}

	@Override
	public <S extends Vehicle> S save(S entity) {
		return vehicleRepository.save(entity);
	}

	@Override
	public <S extends Vehicle> Iterable<S> saveAll(Iterable<S> entities) {
		return vehicleRepository.saveAll(entities);
	}

	@Override
	public Optional<Vehicle> findById(Integer id) {
		return vehicleRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return vehicleRepository.existsById(id);
	}

	@Override
	public Iterable<Vehicle> findAll() {
		return vehicleRepository.findAll();
	}

	@Override
	public Iterable<Vehicle> findAllById(Iterable<Integer> ids) {
		return vehicleRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return vehicleRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		vehicleRepository.deleteById(id);
	}

	@Override
	public void delete(Vehicle entity) {
		vehicleRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Vehicle> entities) {
		vehicleRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		vehicleRepository.deleteAll();
	}

	
	
}
