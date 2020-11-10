package cplayer.user.app.model;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.meanbean.test.BeanTester;

public class UserTests {
	
	private User user;
	
	@Before
	public void setUp() {
		user = new User();

		user.setUsername("Manju@123");
		user.setMobile("8639591684");
		user.setImage("lets.say.sample.jpeg");
		user.setName("Pujari");
	}
	
	@Test
	public void test() {
		new BeanTester().testBean(User.class);
	}

}
