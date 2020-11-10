package cplayer.userAuthentication.app.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;
public class UserAuthenticationTests {
	
	private UserAuthentication user;
	
	@Before
	public void setUp() {
		user = new UserAuthentication();
        user.setUsername("anusha");
        user.setPassword("anu123");
	}
		
        @Test
    	public void test() {
    		new BeanTester().testBean(UserAuthentication.class);
    	}
}