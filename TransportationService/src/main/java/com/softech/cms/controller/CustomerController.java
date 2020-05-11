package com.softech.cms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.User;
import com.softech.cms.service.CustomerService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/customers")
public class CustomerController {
	@Autowired
	private CustomerService customerService;

//	@PutMapping("/{id}/update")
//	public Customer update(@PathVariable Integer id, @RequestBody User user) {
//		HashMap<String, Object> response = new HashMap<>();
//		response.put("status", "SUCCESS");
//		response.put("message", "Đăng nhập thành công");
//		response.put("data", null);
//
//		return customerService.findById(id).map(User -> {
//
//			return customerService.save(User);
//		}).get();
//	}
//	
	@GetMapping("/get")
	public List<Customer> getAll() {
		return (List<Customer>) customerService.findAll();
	}

	@PostMapping("/update")
	public Map<String, Object> login(@RequestBody Map<String, String> requestBody) throws MessagingException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Update thành công !");
		response.put("data", null);
		Integer id = Integer.valueOf(requestBody.get("id"));
		if (requestBody.get("address") == null || requestBody.get("address").trim().isEmpty()) {
			response.replace("status", "WARNING");
			response.replace("message", "Update thất bại !");

		} else {
			customerService.findById(id).map(customer -> {
				customer.setAddress(requestBody.get("address"));

				return customerService.save(customer);
			}).get();
		}
		return response;
	}

}
