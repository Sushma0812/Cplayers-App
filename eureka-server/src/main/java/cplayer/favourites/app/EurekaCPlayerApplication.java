package cplayer.favourites.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaCPlayerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaCPlayerApplication.class, args);
	}

}
