package controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



import dao.UserImpl;

import model.User;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("user")
public class UserController {
	@Autowired
   UserImpl impl;
	
	@GetMapping("/test")
	public String hello() {
		return"test";
	}
	@GetMapping("getbyId/{id}")
	public User getUserById(@PathVariable int id) {
		User userobj=impl.findById(id).get();
		return userobj;
	}
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailId();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			User userobj=impl.findByEmailId(tempEmailId);
			if(userobj!=null) {
				throw new Exception("user with"+tempEmailId+"is already present");
			}
		}
		
		User userobj=null;
		userobj=impl.save(user);
		return userobj;
	}
	
	
	
	
	
	@GetMapping("view")    
	public List<User>viewUser(){
		return impl.findAll();
	}
	
	@PostMapping("add")
	public User addUser(@RequestBody User user) {          
		User userObj=null;
		userObj=impl.save(user);
		return userObj;    
	}
	@PutMapping("update/{id}")
	public User updateUser(@RequestBody User user,@PathVariable int id) {
		 User update=impl.findById(id).get();
			update.setId(user.getId());
			update.setEmailId(user.getEmailId());
			update.setUsername(user.getUsername());
			update.setPassword(user.getPassword());
		     impl.save(update);
		     return update;
		 //    return "updated successfully";
	
		
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable int id) {
		User user=impl.findById(id).get();
		impl.deleteById(id);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailId();
		String tempPass=user.getPassword();
		User userObj=null;
		if(tempEmailId!=null && tempPass!=null) {
				userObj=impl.findByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null) {
			throw new Exception("Bad Credential");
			
		}
		return userObj;
	}
	
}
	