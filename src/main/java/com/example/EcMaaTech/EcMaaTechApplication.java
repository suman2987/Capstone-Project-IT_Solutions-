package com.example.EcMaaTech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;




@ComponentScan("controller")
 @EntityScan("model")
@EnableJpaRepositories("dao")
@SpringBootApplication
public class EcMaaTechApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcMaaTechApplication.class, args);
	}

}
