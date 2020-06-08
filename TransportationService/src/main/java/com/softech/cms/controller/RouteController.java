package com.softech.cms.controller;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softech.cms.exception.UserNotFoundException;
import com.softech.cms.model.BusStop;
import com.softech.cms.model.Division;
import com.softech.cms.model.Route;
import com.softech.cms.model.TripCloseTime;
import com.softech.cms.model.User;
import com.softech.cms.service.BusStopService;
import com.softech.cms.service.RouteService;
import com.softech.cms.service.TripCloseTimeService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/routes")
public class RouteController {

	@Autowired
	private RouteService routeService;
	
	@Autowired
	private BusStopService busStopService;
	
	@Autowired
	private TripCloseTimeService closeTimeService;


//	@PostMapping()
//	public Route insert(@RequestBody Route user) {
//		return routeService.save(user);
//	}

	@GetMapping("/get")
	public List<Route> getAll() {
		return (List<Route>) routeService.findAll();
	}

	@PostMapping("/destinationRoutes")
	public Map<String, Object> login(@RequestBody Map<String, String> requestBody) throws MessagingException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("data", null);

		Integer id = Integer.valueOf(requestBody.get("id"));

		List<Route> route = routeService.findByStart(id);

		if (route.size() == 0) {
			response.replace("status", "WARNING");
			response.put("message", "Không tồn tại !");
		} else {
			HashMap<String, Object> data = new HashMap<>();

			data.put("routes", route);

			response.replace("data", data);
		}

		return response;
	}

	@PostMapping("/busStop")
	public Map<String, Object> busStop(@RequestBody Map<String, String> requestBody) throws MessagingException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("data", null);

		Integer cityid = Integer.valueOf(requestBody.get("id"));

		List<BusStop> busStop = busStopService.findByCityid(cityid);

		if (busStop.size() == 0) {
			response.replace("status", "WARNING");
			response.put("message", "Không tồn tại !");
		} else {
//			HashMap<String, Object> data = new HashMap<>();
//
//			data.put("routes", busStop);

			response.replace("data", busStop);
		}

		return response;
	}
	
	
	@PostMapping("/searchRoute")
	public Map<String, Object> searchRoute(@RequestBody Map<String, String> requestBody) throws MessagingException, ParseException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
//		response.put("data", null);

		Integer startid = Integer.valueOf(requestBody.get("startId"));
		Integer endid = Integer.valueOf(requestBody.get("endId"));
		String date = requestBody.get("date");
		
		java.util.Date time = new SimpleDateFormat("dd/MM/yyyy").parse(date);
		Date sqlDate = new Date(time.getTime());
		
		Integer id = routeService.findByStartAndDestination(startid, endid).getId();
		
		TripCloseTime close = closeTimeService.findById(id).get();
		
		if(close.getClosedate().equals(sqlDate)) {
			response.replace("status", "WARNING");
			response.put("message", "không thể chọn ngày này !");
		}else{
			response.replace("status", "SUCCESS");
		}

		return response;
	}
	
	@GetMapping("/{id}/get")
	public Route findByid(@PathVariable Integer id) {
		return routeService.findById(id).orElseThrow(() -> {
			throw new UserNotFoundException();
		});
	}

	@DeleteMapping("/{id}/delete")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		routeService.deleteById(id);
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
