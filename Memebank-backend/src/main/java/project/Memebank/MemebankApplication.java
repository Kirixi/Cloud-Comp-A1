package project.Memebank;

import net.bytebuddy.build.ToStringPlugin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MemebankApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemebankApplication.class, args);
	}

}
