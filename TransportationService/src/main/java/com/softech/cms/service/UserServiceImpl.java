package com.softech.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softech.cms.model.User;
import com.softech.cms.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User findByusername(String username) {
		return userRepository.findByusername(username);
	}

	@Override
	public <S extends User> S save(S entity) {
		return userRepository.save(entity);
	}

	public User findByVerifycode(String code) {
		return userRepository.findByVerifycode(code);
	}

	@Override
	public <S extends User> Iterable<S> saveAll(Iterable<S> entities) {
		return userRepository.saveAll(entities);
	}

	@Override
	public Optional<User> findById(Integer id) {
		return userRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return userRepository.existsById(id);
	}

	@Override
	public Iterable<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public Iterable<User> findAllById(Iterable<Integer> ids) {
		return userRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return userRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		userRepository.deleteById(id);
	}

	@Override
	public void delete(User entity) {
		userRepository.delete(entity);
	}

	@Override
	public void deleteAll(Iterable<? extends User> entities) {
		userRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		userRepository.deleteAll();
	}
	
	
}
