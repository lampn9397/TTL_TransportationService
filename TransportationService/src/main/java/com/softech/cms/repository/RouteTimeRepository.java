package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.User;

@Repository
public interface RouteTimeRepository extends CrudRepository<RouteTime,Integer> {
	
//	@Query("SELECT p FROM User where LOWER(p.firstname) like :key%" + " or LOWER(p.lastname) like :key%" )
//	public List<User> searchBy(@Param("word") String key);
		
//	@Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);
	
	public List<RouteTime> findByRouteid(Integer routeid);
}
