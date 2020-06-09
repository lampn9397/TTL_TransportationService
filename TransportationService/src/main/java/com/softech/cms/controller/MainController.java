package com.softech.cms.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.util.List;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.softech.cms.model.Customer;
import com.softech.cms.model.Division;
import com.softech.cms.service.CustomerService;
import com.softech.cms.service.UserService;
import com.softech.cms.util.WebUtils;

@Controller
public class MainController {

	private com.softech.cms.model.User Users;

	@Autowired
	private UserService userService;

	@Autowired
	public JavaMailSender emailSender;

	@Autowired
	private CustomerService customerService;

	public static String randomCode() {
		Random generator = new Random();

		return "" + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9) + generator.nextInt(9)
				+ generator.nextInt(9) + generator.nextInt(9);
	}

	public void sendMail2(String email, String code) throws MessagingException {
		// Create a Simple MailMessage.
		MimeMessage message = emailSender.createMimeMessage();

		MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");

		helper.setTo(email);
		helper.setSubject("Forgot password");
		helper.setText("Your new password is: " + code);

		this.emailSender.send(message);
	}

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

	@RequestMapping(value = { "/", "/login" }, method = RequestMethod.GET)
	public String loginPage(Model model) {
		return "loginPage";
	}

	@RequestMapping(value = "/forgotPassword", method = RequestMethod.GET)
	public String forgotPassword(Model model) {
		return "forgotPasswordPage";
	}

	@RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
	public String forgotPassword(Model model, @Valid String email) {
		try {
			
			System.out.println(email.trim());
			Customer user = customerService.findByEmail(email.trim());
			System.out.println(user.getEmail());
			if (user != null) {
				try {
					Customer customer = new Customer();
					customer.setId(user.getId());
					com.softech.cms.model.User account = userService.findByCusid(customer);

					sendMail2(email.trim(), "New" + randomCode());
					account.setPassword(MD5("New" + randomCode()));

					userService.save(account);
					model.addAttribute("success", "Your password is reset !");	
					return "forgotPasswordPage";
				} catch (MessagingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			// TODO: handle exception
		}

		model.addAttribute("error", "Your email does not exist !");
		return "forgotPasswordPage";

	}

//	@RequestMapping(value = "accounts", method = RequestMethod.POST)
//	public String editUser(@Valid String status, Model model) {
//		System.out.println(status);
//
//		model.addAttribute("page", "/pages/table");
//		model.addAttribute("users", userService.findAll());
//		return "dashboard";
////        return "redirect:/courier";
//	}

//	@PutMapping("/{id}/update")
//	public Route update(@PathVariable Integer id, @RequestBody Route user) {
//		return routeService.findById(id).map(Route -> {
//			Route.setPassword(user.getPassword());
//			Route.setStatus(user.getStatus());
//
//			return userService.save(Route);
//		}).get();
//	}

//    @RequestMapping(value = "/admin", method = RequestMethod.GET)
//    public String adminPage(Model model, Principal principal) {
//         
//        User loginedUser = (User) ((Authentication) principal).getPrincipal();
// 
//        String userInfo = WebUtils.toString(loginedUser);
//        model.addAttribute("userInfo", userInfo);
//         
//        return "adminPage";
//    }

//    @RequestMapping(value = "/login", method = RequestMethod.GET)
//    public String loginPage(Model model) {
// 
//        return "loginPage";
//    }

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logoutPage(Model model) {

		return "logoutSuccessfulPage";
	}

	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public String dashboard(Model model, Principal principal) {
		String userName = principal.getName();

		model.addAttribute("page", "/pages/index");
		model.addAttribute("username", userName);

		return "dashboard";
	}

	@RequestMapping(value = "/profile", method = RequestMethod.GET)
	public String userProfile(Model model) {
		model.addAttribute("page", "/pages/userProfile");

		return "dashboard";
	}

	@RequestMapping(value = "/logoutSuccessful", method = RequestMethod.GET)
	public String logoutSuccessfulPage(Model model) {
		model.addAttribute("title", "Logout");
		return "logoutSuccessfulPage";
	}

	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	public String userInfo(Model model, Principal principal) {

		// Sau khi user login thanh cong se co principal
		String userName = principal.getName();

		System.out.println("User Name: " + userName);

		User loginedUser = (User) ((Authentication) principal).getPrincipal();

		String userInfo = WebUtils.toString(loginedUser);
		model.addAttribute("userInfo", userInfo);

		return "userInfoPage";
	}

	@RequestMapping(value = "/403", method = RequestMethod.GET)
	public String accessDenied(Model model, Principal principal) {

		if (principal != null) {
			User loginedUser = (User) ((Authentication) principal).getPrincipal();

			String userInfo = WebUtils.toString(loginedUser);

			model.addAttribute("userInfo", userInfo);

			String message = "Hi " + principal.getName() //
					+ "<br> You do not have permission to access this page!";
			model.addAttribute("message", message);

		}

		return "403Page";
	}

	// Account
	@RequestMapping(value = "/accountTable", method = RequestMethod.GET)
	public String accountTable(@Valid String status, Model model) {

		model.addAttribute("page", "/pages/accounts/accountTable");
		model.addAttribute("users", userService.findAll());
		return "dashboard";
	}

	@RequestMapping(value = "/accountTable", method = RequestMethod.POST)
	public String accountTable(@Valid String status, @Valid String division, Model model,
			@RequestParam(value = "accountId", required = false) Integer id) {
		if (status != null && division != null) {
			Division divisionId = new Division();
			divisionId.setId(Integer.parseInt(division));

			com.softech.cms.model.User account = userService.findById(id).get();

			account.setDivisionid(divisionId);
			account.setStatus(status);

			userService.save(account);
		}

		model.addAttribute("page", "/pages/accounts/accountTable");
		model.addAttribute("users", userService.findAll());
		return "dashboard";
	}

//  account edit

	@RequestMapping(value = "/account/edit")
	public String accountEdit(Model model, @RequestParam(value = "id", required = false) Integer id) {
		model.addAttribute("user", userService.findById(id).get());
		model.addAttribute("active", userService.findAll());
		model.addAttribute("page", "/pages/accounts/accountEdit");
		return "dashboard";
	}

	@RequestMapping(value = "/account/delete")
	public String accountDelete(Model model, @RequestParam(value = "id", required = false) Integer id) {
//		userService.deleteById(id);
		model.addAttribute("users", userService.findAll());
		model.addAttribute("page", "/pages/accounts/accountTable");
		return "redirect:/accountTable";
	}

	// ---------------------------------------------------------------
	// Users
	@RequestMapping(value = "/userTable", method = RequestMethod.GET)
	public String userTable(@Valid String status, Model model) {

		model.addAttribute("page", "/pages/users/userTable");
		model.addAttribute("users", customerService.findAll());
		List<Customer> user = (List<Customer>) customerService.findAll();
		for (Customer customer : user) {
			System.out.println(customer.getIdcard());
		}
		return "dashboard";
	}

	@RequestMapping(value = "/userTable", method = RequestMethod.POST)
	public String userTable(Model model, @RequestParam(value = "accountId", required = false) Integer id,
			@Valid @ModelAttribute("appUserForm") Customer customer) {

		if (customer != null) {
			customer.setId(id);
			customerService.save(customer);
		}

		model.addAttribute("page", "/pages/users/userTable");
		model.addAttribute("users", customerService.findAll());
		return "dashboard";
	}

	@RequestMapping(value = "/createUser", method = RequestMethod.GET)
	public String createUser(@Valid String status, Model model) {

		model.addAttribute("page", "/pages/users/createUser");

		return "dashboard";
	}

	@RequestMapping(value = "/user/create", method = RequestMethod.POST)
	public String createUser(Model model, @Valid @ModelAttribute("appUserForm") Customer customer) {

		java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());
		if (customer != null) {
			customer.setCreateddate(sqlDate);
			customerService.save(customer);
		}

		model.addAttribute("page", "/pages/users/userTable");
		model.addAttribute("users", customerService.findAll());
		return "redirect:/userTable";
	}

	@RequestMapping(value = "/user/edit")
	public String userEdit(Model model, @RequestParam(value = "id", required = false) Integer id) {
		model.addAttribute("user", customerService.findById(id).get());
//			model.addAttribute("active", userService.findAll());
		model.addAttribute("page", "/pages/users/userEdit");
		return "dashboard";
	}

	@RequestMapping(value = "/user/delete")
	public String userDelete(Model model, @RequestParam(value = "id", required = false) Integer id) {
		customerService.deleteById(id);
		model.addAttribute("users", customerService.findAll());
		model.addAttribute("page", "/pages/users/userTable");
		return "redirect:/userTable";
	}

}