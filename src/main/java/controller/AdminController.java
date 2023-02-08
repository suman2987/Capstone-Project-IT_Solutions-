package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dao.AdminImpl;
import dao.UserImpl;
import model.Admin;
import model.User;



@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("admin")

public class AdminController {
	@Autowired
	AdminImpl impl;
	
	@GetMapping("/test")
	public String hello() {
		return"test";
	}
	@PostMapping("login")
	public Admin loginUser(@RequestBody Admin admin) throws Exception {
		String tempUsername=admin.getUsername();
		String tempPass=admin.getPassword();
		Admin adminObj=null;
		if(tempUsername!=null && tempPass!=null) {
			adminObj=impl.findByUsernameAndPassword(tempUsername, tempPass);
		}
		if(adminObj==null) {
			throw new Exception("Bad Credential");
			
		}
		return adminObj;
	}
	
}
