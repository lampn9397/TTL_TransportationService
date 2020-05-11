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
import java.util.Timer;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.catalina.mapper.Mapper;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.softech.cms.exception.UserNotFoundException;
import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.model.Employee;
import com.softech.cms.model.User;
import com.softech.cms.service.CustomerService;
import com.softech.cms.service.UserService;
import com.softech.cms.util.Validators;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	public JavaMailSender emailSender;

	@Autowired
	private UserService userService;

	@Autowired
	private CustomerService customerService;

	public static String MD5(String text) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			byte[] messageDigest = md.digest(text.getBytes());

			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++) {
				sb.append(Integer.toString((messageDigest[i] & 0xff) + 0x100, 16).substring(1));
			}
			return sb.toString();

		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
	}

	public static String randomCode() {
		Random generator = new Random();

		return "EMP" + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9)
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

	@PostMapping()
	public User insert(@RequestBody User user) {
		return userService.save(user);
	}

	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Map<String, String> requestBody) throws MessagingException {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Đăng nhập thành công");
		response.put("data", null);

		String username = requestBody.get("username").trim();
		String password = requestBody.get("password").trim();

		User user = userService.findByusername(username);

		if (user == null) {
			// Tài khoản không tồn tại
			response.replace("status", "WARNING");
			response.replace("message", "Thông tin đăng nhập không chính xác");
		} else {
			if (user.getPassword().equalsIgnoreCase(password) == false) {
				// Sai mật khẩu
				response.replace("status", "WARNING");
				response.replace("message", "Sai mật khẩu");
			} else {
				HashMap<String, Object> data = new HashMap<>();

				Division division = user.getDivisionid();
				data.put("division", division);

				Object userInfo = null;

				if (division.getType().equals("CUSTOMER")) {
					userInfo = user.getCusid();
				} else {
					userInfo = user.getEmpid();
				}

				data.put("user", userInfo);

				response.replace("data", data);
			}
		}

		return response;
	}

	@PostMapping("/test")
	public String test(@RequestBody Map<String, String> requestBody) throws MessagingException {
		String random = randomCode();
		String username = requestBody.get("username").trim().toLowerCase();
		String password = requestBody.get("password").trim().toLowerCase();
		String email = requestBody.get("email").trim();
		try {
			sendMail("lampn9397@gmail.com", "http://tranthuan1997.ddns.net/api/users/verify/"+random);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return MD5(password);
	}

	@PostMapping("/register")
	public Map<String, Object> register(@RequestBody Map<String, String> requestBody) {
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Đăng ký thành công. Vui lòng kiểm tra Email để xác thực tài khoản !");
		response.put("data", null);

		String username = requestBody.get("username").trim();
		String password = requestBody.get("password").trim();
		String email = requestBody.get("email").trim();
		String fullname = requestBody.get("fullname").trim();

		Boolean name = username.matches(Validators.USERNAME_REGEX);
		Boolean pwd = password.matches(Validators.PASSWORD_REGEX);
		Boolean mail = email.matches(Validators.EMAIL_REGEX);

		User user = userService.findByusername(username);
		Customer customer = customerService.findByEmail(email);

		if (user != null) {
			// Tài khoản tồn tại
			response.replace("status", "WARNING");
			response.replace("message", "Tài khoản tồn tại");
		} else {
			if (customer != null) {
				// Email tồn tại
				response.replace("status", "WARNING");
				response.replace("message", "Email tồn tại");
			} else {
				if (name == false) {
					response.replace("status", "WARNING");
					response.replace("message",
							"Username không hợp lệ."
									+ " Gồm các ký tự từ a-z, A-Z, 0-9, bao gồm ký tự _ (gạch dưới), độ dài 5-20 ký tự."
									+ " Không có ký tự đặc biệt &^#.~@!%*$ và khoảng trắng.");
				} else if (pwd == false) {
					response.replace("status", "WARNING");
					response.replace("message",
							"Password không hợp lệ." + " Gồm các ký tự từ a-z, A-Z, 0-9, độ dài 7-20 ký tự."
									+ " Không có ký tự đặc biệt &^#.~@!%*$_ và khoảng trắng.");
				} else if (mail == false) {
					response.replace("status", "WARNING");
					response.replace("message", "Email không hợp lệ." + " Gồm các ký tự từ a-z, A-Z, 0-9."
							+ " Không có ký tự đặc biệt &^#~!%*$ và khoảng trắng." + " Ví dụ: abc@gmail.com");
				} else {

					HashMap<String, Object> data = new HashMap<>();
					java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());
					String random = randomCode();

					// Tạo thông tin người dùng

					Customer createCustomer = new Customer();

					createCustomer.setAddress("");
					createCustomer.setBirthday(sqlDate);
					createCustomer.setCreateddate(sqlDate);
					createCustomer.setEmail(email);
					createCustomer.setFullname(fullname);
					createCustomer.setGender("");
					createCustomer.setPhonenumber("");

					customerService.save(createCustomer);

					// Tạo tài khoản
					User createUser = new User();

					Division dId = new Division();
					dId.setId(1);

					Customer cId = new Customer();
					cId.setId(createCustomer.getId());

					createUser.setUsername(username);
					createUser.setPassword(MD5(password));
					createUser.setCreateddate(sqlDate);
					createUser.setStatus("PENDING");
					createUser.setCusid(cId);
					createUser.setEmpid(null);
					createUser.setDivisionid(dId);
					createUser.setVerifycode(random);

					userService.save(createUser);

					data.put("Fullname", fullname);
					data.put("Username", username);
					data.put("Password", password);
					data.put("Email", email);

					response.replace("data", data);
					Thread t = new Thread(()-> {
						try {
							sendMail(email, "http://tranthuan1997.ddns.net/api/users/verify/"+random);
						} catch (MessagingException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					});
					t.start();
				}
			}
		}

		return response;
	}

	@RequestMapping(value = "/verify/{code}", method = RequestMethod.GET)
	public Object verify(@PathVariable String code) {
		User u = userService.findByVerifycode(code);
		
		if (u == null || u.getStatus().equals("PENDING") == false) {
			// Sai mã code
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		u.setStatus("ACTIVE");
		
		userService.save(u);
		
		HashMap<String, Object> response = new HashMap<>();

		response.put("status", "SUCCESS");
		response.put("message", "Xác thực thành công");
		response.put("data", null);
		
		 ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		return modelAndView;
	}

	@GetMapping("/get")
	public List<User> getAll() {
		return (List<User>) userService.findAll();
	}

	@GetMapping("/{id}/get")
	public User findByid(@PathVariable Integer id) {
		return userService.findById(id).orElseThrow(() -> {
			throw new UserNotFoundException();
		});
	}

	@DeleteMapping("/{id}/delete")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		userService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping("/{id}/update")
	public User update(@PathVariable Integer id, @RequestBody User user) {
		return userService.findById(id).map(User -> {
			User.setPassword(user.getPassword());
			User.setStatus(user.getStatus());

			return userService.save(User);
		}).get();
	}
}
