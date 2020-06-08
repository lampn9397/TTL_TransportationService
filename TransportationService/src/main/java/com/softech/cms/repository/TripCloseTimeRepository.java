package com.softech.cms.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.TripCloseTime;

@Repository
public interface TripCloseTimeRepository extends CrudRepository<TripCloseTime, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

	public List<TripCloseTime> findByClosedate(Date closedate);
	
//	@Query("SELECT * FROM cities")
//	City getCities();
}
