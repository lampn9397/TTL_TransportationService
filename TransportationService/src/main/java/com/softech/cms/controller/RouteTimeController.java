package com.softech.cms.controller;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softech.cms.exception.UserNotFoundException;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.TripCloseTime;
import com.softech.cms.model.User;
import com.softech.cms.service.CustomerService;
import com.softech.cms.service.RouteService;
import com.softech.cms.service.RouteTimeService;
import com.softech.cms.service.TicketService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/routetimes")
public class RouteTimeController {

	@Autowired
	private RouteTimeService routeTimeService;
	
	@Autowired
	private RouteService routeService;

	@PostMapping("/getTimeByRoute")
	public Map<String, Object> time(@RequestBody Map<String, String> requestBody)
			throws MessagingException, ParseException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("data", null);
		
		
		Integer startid = Integer.valueOf(requestBody.get("startId"));
		Integer endid = Integer.valueOf(requestBody.get("endId"));
		
		Integer routeId = routeService.findByStartAndDestination(startid, endid).getId();

		List<RouteTime> time = routeTimeService.findByRouteid(routeId);
		if (time.size() == 0) {
			response.replace("status", "WARNING");
			response.put("message", "Hiện tại chưa có chuyến này !");
		} else {
			
			response.replace("status", "SUCCESS");
			response.put("data", time);
		}

		return response;
	}

//	@PostMapping()
//	public RouteTime insert(@RequestBody RouteTime ticket) {
//		return routeTimeService.save(ticket);
//	}

	@GetMapping("/get")
	public List<RouteTime> getAll() {
		return (List<RouteTime>) routeTimeService.findAll();
	}

	@GetMapping("/{id}/get")
	public RouteTime findByid(@PathVariable Integer id) {
		return routeTimeService.findById(id).orElseThrow(() -> {
			throw new UserNotFoundException();
		});
	}

	@DeleteMapping("/{id}/delete")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		routeTimeService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping("/{id}/update")
	public RouteTime update(@PathVariable Integer id, @RequestBody RouteTime routetime) {
		return routeTimeService.findById(id).map(RouteTime -> {

			return routeTimeService.save(RouteTime);
		}).get();
	}
}
