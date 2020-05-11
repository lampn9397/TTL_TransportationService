package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.City;
import com.softech.cms.model.Route;;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

//	public Customer findByEmail(String email);
	
	
//	@Query("SELECT * FROM cities")
//	City getCities();
}
