package com.softech.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.softech.cms.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	// @Query("SELECT * FROM accounts WHERE username = ?1 and password = ?2")
//	User findUserByUsernameAndPassword(String username, String password);

	public Customer findByEmail(String email);
}
