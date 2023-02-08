package dao;



import org.springframework.data.jpa.repository.JpaRepository;


import model.User;

public interface UserImpl extends JpaRepository<User, Integer> {
  
	 public User findByEmailId(String emailId);
	 public User findByEmailIdAndPassword(String emailId,String password);
	
	   
}
