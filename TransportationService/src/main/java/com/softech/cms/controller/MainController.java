package com.softech.cms.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.softech.cms.service.UserService;
import com.softech.cms.util.WebUtils;
 
@Controller
public class MainController {
	
	private com.softech.cms.model.User Users;
	
	@Autowired
	private UserService userService;
 
    @RequestMapping(value = { "/", "/welcome" }, method = RequestMethod.GET)
    public String welcomePage(Model model) {
        model.addAttribute("title", "Welcome");
        model.addAttribute("message", "This is welcome page!");
        return "welcomePage";
    }
    
//    user edit
    
    @RequestMapping(value = "/user/edit")
    public String userEdit( Model model, @RequestParam(value = "id", required = false) Integer id) {
    	model.addAttribute("user", userService.findById(id).get());
    	model.addAttribute("page", "/pages/userEdit");
        return "dashboard";
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
    
 
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String adminPage(Model model, Principal principal) {
         
        User loginedUser = (User) ((Authentication) principal).getPrincipal();
 
        String userInfo = WebUtils.toString(loginedUser);
        model.addAttribute("userInfo", userInfo);
         
        return "adminPage";
    }
    @RequestMapping(value = "/table", method = RequestMethod.GET)
    public String table(Model model) {
    	
    	model.addAttribute("page", "/pages/table");
    	model.addAttribute("users", userService.findAll());
        return "dashboard";
    }
    
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage(Model model) {
 
        return "loginPage";
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
 
}