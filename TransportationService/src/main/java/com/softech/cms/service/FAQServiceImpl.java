package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.FAQ;
import com.softech.cms.model.User;
import com.softech.cms.repository.BusStopRepository;
import com.softech.cms.repository.CityRepository;
import com.softech.cms.repository.CustomerRepository;
import com.softech.cms.repository.FAQRepository;
import com.softech.cms.repository.UserRepository;

@Service
public class FAQServiceImpl implements FAQService {

	@Autowired
	private FAQRepository faqReponsitory;

	@Override
	public <S extends FAQ> S save(S entity) {
		return faqReponsitory.save(entity);
	}

	@Override
	public <S extends FAQ> Iterable<S> saveAll(Iterable<S> entities) {
		return faqReponsitory.saveAll(entities);
	}

	@Override
	public Optional<FAQ> findById(Integer id) {
		return faqReponsitory.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return faqReponsitory.existsById(id);
	}

	@Override
	public Iterable<FAQ> findAll() {
		return faqReponsitory.findAll();
	}

	@Override
	public Iterable<FAQ> findAllById(Iterable<Integer> ids) {
		return faqReponsitory.findAllById(ids);
	}

	@Override
	public long count() {
		return faqReponsitory.count();
	}

	@Override
	public void deleteById(Integer id) {
		faqReponsitory.deleteById(id);
	}

	@Override
	public void delete(FAQ entity) {
		faqReponsitory.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends FAQ> entities) {
		faqReponsitory.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		faqReponsitory.deleteAll();
	}

	
	
}
