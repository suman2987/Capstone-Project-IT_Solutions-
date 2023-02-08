package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dao.ItserviceImpl;
import model.Itservice;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("service")
public class ServiceController {
	
	@Autowired
	ItserviceImpl impl;
	
	
	@GetMapping("view")   
	public List<Itservice>viewService(){
		return impl.findAll();
	}

	
	
}
