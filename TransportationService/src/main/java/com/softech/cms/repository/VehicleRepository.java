package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.Vehicle;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

//	public List<BusStop> findByCityid(Integer cityid);
	
	public Vehicle findByRoutetimeid(Integer routeTimeId);
	
	
//	@Query("SELECT * FROM cities")
//	City getCities();
}
