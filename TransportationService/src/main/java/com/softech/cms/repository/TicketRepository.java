package com.softech.cms.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.BusStop;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

	public List<Ticket> findByRoutetimeid(Integer routetimeid);
	
	@Query(value = "SELECT * FROM Tickets WHERE CustomerId = ?1", nativeQuery = true)
	List<Ticket> findByCustomerId(Integer customerId);
	
	@Query(value = "SELECT * FROM Tickets WHERE CustomerId = ?1 and Status = 'PAID' ORDER BY DateStart DESC", nativeQuery = true)
	List<Ticket> findByCustomerIdOrderByCreatedDate(Integer customerId);
	
	@Query(value = "SELECT * FROM Tickets WHERE routetimeid = ?1 and datestart = ?2", nativeQuery = true)
	List<Ticket> findByRouteTimeAndDate(Integer routetimeid, Date datestart);
	
	
	@Query(value = "SELECT * FROM Tickets WHERE routetimeid = ?1 and datestart = ?2 and vehicleid = ?3", nativeQuery = true)
	List<Ticket> findByRouteTimeAndDateAndVehicle(Integer routeTimeId, Date dateStart, Integer vehicleId);
}
