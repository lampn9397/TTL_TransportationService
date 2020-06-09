package com.softech.cms.controller;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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
import com.softech.cms.model.BusStop;
import com.softech.cms.model.City;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.Route;
import com.softech.cms.model.RouteTime;
import com.softech.cms.model.Ticket;
import com.softech.cms.model.FAQ;
import com.softech.cms.model.Trip;
import com.softech.cms.model.TripCloseTime;
import com.softech.cms.model.User;
import com.softech.cms.model.Vehicle;
import com.softech.cms.service.BusStopService;
import com.softech.cms.service.CityService;
import com.softech.cms.service.CustomerService;
import com.softech.cms.service.RouteService;
import com.softech.cms.service.RouteTimeService;
import com.softech.cms.service.DivisionService;
import com.softech.cms.service.TicketService;
import com.softech.cms.service.TripService;
import com.softech.cms.service.VehicleService;
import com.softech.cms.util.Validators;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/tickets")
public class TicketController {

	public Integer globalId = 0;

	@Autowired
	public JavaMailSender emailSender;

	@Autowired
	private TicketService ticketService;

	@Autowired
	private BusStopService busStopService;

	@Autowired
	private VehicleService vehicleService;

	@Autowired
	private RouteService routeService;

	@Autowired
	private RouteTimeService routeTimeService;

	@Autowired
	private CityService cityService;

	public static String randomCode() {
		Random generator = new Random();

		return "" + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9)
				+ generator.nextInt(9) + generator.nextInt(9);
	}

	public void sendMail(String email, String code) throws MessagingException {
		// Create a Simple MailMessage.
		MimeMessage message = emailSender.createMimeMessage();

		MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");

		helper.setTo(email);
		helper.setSubject("Xác nhận tài khoản");
		helper.setText("Mã xác thực là: " + code);

		this.emailSender.send(message);
	}

	@PostMapping("/getSeat")
	public Map<String, Object> getSeat(@RequestBody Map<String, String> requestBody)
			throws MessagingException, ParseException {
		HashMap<String, Object> response = new HashMap<>();

		String date = requestBody.get("date");
		Integer routeTimeId = Integer.valueOf(requestBody.get("routeTimeId"));

		Vehicle v = vehicleService.findByRoutetimeid(routeTimeId);
		Integer vehicleId = v.getId();

		ArrayList<HashMap<String, Object>> seatList = new ArrayList<HashMap<String, Object>>();
		for (int i = 0; i < 16; i++) {
			HashMap<String, Object> seat = new HashMap<>();

			seat.put("id", i + 1);
			seat.put("name", "A" + (i + 1));
			seat.put("status", "AVAILABLE");

			seatList.add(seat);
		}

		response.put("status", "SUCCESS");
		response.put("data", seatList);

		java.util.Date time = new SimpleDateFormat("dd/MM/yyyy").parse(date);
		Date sqlDate = new Date(time.getTime());

		List<Ticket> ticket = ticketService.findByRouteTimeAndDateAndVehicle(routeTimeId, sqlDate, vehicleId);

		for (Ticket t : ticket) {
			if (t.getStatus().equals("PAID")) {
				int seatIndex = Integer.parseInt(t.getSeat().substring(1));
				seatList.get(seatIndex - 1).replace("status", "UNAVAILABLE");
			}
		}
		return response;
	}

	@PostMapping("/history")
	public Map<String, Object> history(@RequestBody Map<String, String> requestBody) {
		HashMap<String, Object> response = new HashMap<>();
		response.put("status", "SUCCESS");
		response.put("message", "Ticket history");
		response.put("data", null);

		int customerId = Integer.valueOf(requestBody.get("customerId"));

		List<Ticket> tickets = ticketService.findByCustomerIdOrderByCreatedDate(customerId);

		ArrayList<HashMap<String, Object>> dataList = new ArrayList<HashMap<String, Object>>();

		for (Ticket ticket : tickets) {
			HashMap<String, Object> data = new HashMap<String, Object>();
			data.put("id", ticket.getId());
			data.put("ticketnumber", ticket.getTicketnumber());
			data.put("datestart", ticket.getDatestart());
			data.put("price", ticket.getPrice());
			data.put("seat", ticket.getSeat());
			data.put("status", ticket.getStatus());
			data.put("routetimeid", ticket.getRoutetimeid());
			data.put("routeid", ticket.getRouteid());
			
			int routeTimeId = ticket.getRoutetimeid();
			RouteTime routetime = routeTimeService.findById(routeTimeId).get();
			data.put("timestart", routetime.getTime());
			
			int vehicleId = ticket.getVehicleid();
			Vehicle vehicle = vehicleService.findById(vehicleId).get();
			data.put("vehiclePlate", vehicle.getLicenseplates());
			data.put("vehicleid", vehicleId);
			
			BusStop bs = busStopService.findById(ticket.getBusstopid()).get();
			data.put("busStop", bs.getName());
			
			Route r = routeService.findById(ticket.getRouteid()).get();
			
			City cStart = cityService.findById(r.getStart()).get();
			data.put("startPoint", cStart.getName());
			
			City cDestination = cityService.findById(r.getDestination().getId()).get();
			data.put("endPoint", cDestination.getName());
			
			dataList.add(data);
		}

		response.replace("data", dataList);

		return response;
	}

	@PostMapping("/historyDetail")
	public Map<String, Object> historyDetail(@RequestBody Map<String, String> requestBody) {
		HashMap<String, Object> response = new HashMap<>();
		HashMap<String, Object> data = new HashMap<>();
		response.put("status", "SUCCESS");
		response.put("message", "Ticket history detail");
		response.put("data", null);

		int vehicleId = Integer.valueOf(requestBody.get("vehicleId"));
		int routeTimeId = Integer.valueOf(requestBody.get("routeTimeId"));
		int routeId = Integer.valueOf(requestBody.get("routeId"));
		int ticketId = Integer.valueOf(requestBody.get("ticketId"));

		Ticket t = ticketService.findById(ticketId).get();
		Vehicle v = vehicleService.findById(vehicleId).get();
		Route r = routeService.findById(routeId).get();
		System.out.println(t.getBusstopid());
		BusStop bs = busStopService.findById(t.getBusstopid()).get();

		City cStart = cityService.findById(r.getStart()).get();
		City cDestination = cityService.findById(r.getDestination().getId()).get();

		RouteTime rt = routeTimeService.findById(routeTimeId).get();
		String time = rt.getTime();

		data.put("Vehicle", v);
		data.put("RouteStart", cStart);
		data.put("RouteDestination", cDestination);
		data.put("RouteTime", time);
		data.put("BusStop", bs);

		response.replace("data", data);

		return response;
	}

	@PostMapping("/otp")
	public Map<String, Object> otp(@RequestBody Map<String, String> requestBody) {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Mã OTP đã được gửi !");
		response.put("data", "SUCCESS");

		String ticketId = requestBody.get("ticketId").trim();
		String email = requestBody.get("email").trim();

		String random = randomCode();

		Ticket ticket = ticketService.findById(Integer.parseInt(ticketId)).get();
		ticket.setOtp(random);

		ticketService.save(ticket);
		try {
			sendMail(email, random);

		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.replace("data", "WARNING");
		}

		return response;
	}

	@PostMapping("/payment")
	public Map<String, Object> payment(@RequestBody Map<String, String> requestBody) {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Đặt vé thành công !");

		String ticketId = requestBody.get("ticketId").trim();
		String otp = requestBody.get("OTP").trim();

		System.out.println(ticketId);
		System.out.println(otp);

		Ticket ticket = ticketService.findById(Integer.parseInt(ticketId)).get();
		String otpTicket = ticket.getOtp();

		if (otpTicket == null) {
			response.put("status", "WARNING");
			response.put("message", "Chưa có mã OTP !");
			response.put("data", null);
			return response;
		}

		if (ticket.getStatus().equals("PAID")) {
			response.put("status", "WARNING");
			response.put("message", "Vé đã được đặt trước đó !");
			response.put("data", ticket);
			return response;
		}

		if (otpTicket.equals(otp) == false) {
			response.put("status", "WARNING");
			response.put("message", "Mã OTP không đúng !");
			response.put("data", null);

			return response;
		}

		ticket.setStatus("PAID");
		ticketService.save(ticket);

		response.put("data", ticket);

		return response;
	}

	@PostMapping("/addTicket")
	public Map<String, Object> register(@RequestBody Map<String, String> requestBody) throws ParseException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Tạo vé thành công.");
		response.put("data", null);

		String price = requestBody.get("price").trim();
		String dateStart = requestBody.get("dateStart").trim();
//		String createdDate = requestBody.get("createdDate").trim();
		String seat = requestBody.get("seat").trim();
//		String vehicleId = requestBody.get("vehicleId").trim();
		String customerId = requestBody.get("customerId").trim();
		String routeId = requestBody.get("routeId").trim();
		String routeTimeId = requestBody.get("routeTimeId").trim();
		String busStopId = requestBody.get("busStopId").trim();

		java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());

		java.util.Date time = new SimpleDateFormat("dd/MM/yyyy").parse(dateStart);
		Date dStart = new Date(time.getTime());

		Vehicle v = vehicleService.findByRoutetimeid(Integer.parseInt(routeTimeId));
		Integer vehicleId = v.getId();

		String random = randomCode();

//		if(globalId == 1) {
//			response.put("status", "WARNING");
//			response.put("message", "Bạn đã tạo vé trước đó.");
//			response.put("data", null);
//			
//			return response;
//		}

		// Tạo vé xe

		BigDecimal bigDecimalCurrency = new BigDecimal(price);

		Ticket ticket = new Ticket();

		ticket.setTicketnumber(random);
		ticket.setPrice(bigDecimalCurrency);
		ticket.setDatestart(dStart);
		ticket.setCreateddate(sqlDate);
		ticket.setSeat(seat);
		ticket.setVehicleid(vehicleId);
		ticket.setCustomerid(Integer.parseInt(customerId));
		ticket.setStatus("PENDING");
		ticket.setRoutetimeid(Integer.parseInt(routeTimeId));
		ticket.setRouteid(Integer.parseInt(routeId));
		ticket.setOtp(null);
		ticket.setBusstopid(Integer.parseInt(busStopId));

		ticketService.save(ticket);

		this.globalId = 1;

		response.replace("data", ticket);

		return response;
	}

	@GetMapping("/get")
	public List<Ticket> getAll() {
		if (this.globalId == 1) {
			System.out.println("id  =  1");

			return (List<Ticket>) ticketService.findAll();
		}

		this.globalId = 1;

		return (List<Ticket>) ticketService.findAll();
	}

	@GetMapping("/{id}/get")
	public Ticket findByid(@PathVariable Integer id) {
		return ticketService.findById(id).orElseThrow(() -> {
			throw new UserNotFoundException();
		});
	}

//	@DeleteMapping("/{id}/delete")
//	public ResponseEntity<Void> delete(@PathVariable Integer id) {
//		ticketService.deleteById(id);
//		return new ResponseEntity<>(HttpStatus.OK);
//	}
//
//	@PutMapping("/{id}/update")
//	public Ticket update(@PathVariable Integer id, @RequestBody Ticket ticket) {
//		return ticketService.findById(id).map(Ticket -> {
//
//			return ticketService.save(Ticket);
//		}).get();
//	}
}
