package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="itservicelist")
public class Itservice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   private int id;
	@Column(name="itservice_Name")
   private String serviceName;
   
public Itservice() {
	super();
}
public Itservice(int id, String serviceName) {
	super();
	this.id = id;
	this.serviceName = serviceName;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getServiceName() {
	return serviceName;
}
public void setServiceName(String serviceName) {
	this.serviceName = serviceName;
}
   
}
