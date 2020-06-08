package com.softech.cms.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.softech.cms.exception.UserNotFoundException;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.Employee;
import com.softech.cms.model.Route;
import com.softech.cms.model.User;
import com.softech.cms.service.CityService;
import com.softech.cms.service.RouteService;
import com.softech.cms.util.Validators;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/cities")
public class CityController {

	@Autowired
	private CityService cityService;


//	@PostMapping()
//	public City insert(@RequestBody City city) {
//		return cityService.save(city);
//	}

	@GetMapping("/get")
	public List<City> getAll() {
		return (List<City>) cityService.findAll();
	}

	@GetMapping("/{id}/get")
	public City findByid(@PathVariable Integer id) {
		return cityService.findById(id).orElseThrow(() -> {
			throw new UserNotFoundException();
		});
	}

	@DeleteMapping("/{id}/delete")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		cityService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

//	@PutMapping("/{id}/update")
//	public Route update(@PathVariable Integer id, @RequestBody Route user) {
//		return routeService.findById(id).map(Route -> {
//			Route.setPassword(user.getPassword());
//			Route.setStatus(user.getStatus());
//
//			return userService.save(Route);
//		}).get();
//	}
}
