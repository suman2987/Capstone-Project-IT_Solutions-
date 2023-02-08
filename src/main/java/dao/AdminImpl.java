package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Admin;


public interface AdminImpl extends JpaRepository<Admin, String> {
	public Admin findByUsernameAndPassword(String username,String password);
}
