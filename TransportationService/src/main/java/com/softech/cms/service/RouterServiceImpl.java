package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.City;
import com.softech.cms.model.Route;
import com.softech.cms.repository.RouteRepository;;

@Service
public class RouterServiceImpl implements RouteService {

	@Autowired
	private RouteRepository routeRepository;

	@Override
	public <S extends Route> S save(S entity) {
		return routeRepository.save(entity);
	}

	@Override
	public <S extends Route> Iterable<S> saveAll(Iterable<S> entities) {
		return routeRepository.saveAll(entities);
	}

	@Override
	public Optional<Route> findById(Integer id) {
		return routeRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return routeRepository.existsById(id);
	}

	@Override
	public Iterable<Route> findAll() {
		return routeRepository.findAll();
	}

	@Override
	public Iterable<Route> findAllById(Iterable<Integer> ids) {
		return routeRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return routeRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		routeRepository.deleteById(id);
	}

	@Override
	public void delete(Route entity) {
		routeRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends Route> entities) {
		routeRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		routeRepository.deleteAll();
	}

	@Override
	public List<Route> findByStart(Integer id) {
		return routeRepository.findByStart(id);
	}
	
	

}
