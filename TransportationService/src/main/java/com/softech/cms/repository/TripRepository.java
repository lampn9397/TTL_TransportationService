package com.softech.cms.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.Route;
import com.softech.cms.model.Trip;

@Repository
public interface TripRepository extends CrudRepository<Trip, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

	public List<Trip> findByRouteid(Integer routeid);
	
	@Query(value = "SELECT * FROM Trips WHERE routeid = ?1 and datestart = ?2", nativeQuery = true)
	Trip findByRouteIdAndDateStart(Integer routeid, Date datestart);
//	@Query("SELECT * FROM cities")
//	City getCities();
}
