package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.BusStop;

@Repository
public interface BusStopRepository extends CrudRepository<BusStop, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

	public List<BusStop> findByCityid(Integer cityid);
	
	
//	@Query("SELECT * FROM cities")
//	City getCities();
}
