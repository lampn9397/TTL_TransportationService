package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.Customer;
import com.softech.cms.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
	
//	@Query("SELECT p FROM User where LOWER(p.firstname) like :key%" + " or LOWER(p.lastname) like :key%" )
//	public List<User> searchBy(@Param("word") String key);
		
//	@Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);
	
	public User findByusername(String username);
	public User findByVerifycode(String code);
	public User findByCusid(Customer cusid);
}
