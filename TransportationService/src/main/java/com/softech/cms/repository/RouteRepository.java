package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.City;
import com.softech.cms.model.Route;

@Repository
public interface RouteRepository extends CrudRepository<Route, Integer> {
//	 @Query("SELECT * FROM routes WHERE start = ?1 and password = ?2")
	
	@Query(value = "SELECT * FROM Routes WHERE start = ?1 and destination = ?2", nativeQuery = true)
	Route findByStartAndDestination(Integer start, Integer end);
	
//	@Query("SELECT * FROM routes WHERE start = ?1")
	public List<Route> findByStart(Integer start);

//	public Customer findByEmail(String email);

}
