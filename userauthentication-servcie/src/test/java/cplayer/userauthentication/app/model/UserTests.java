package cplayer.userauthentication.app.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

import cplayer.userauthentication.app.model.User;
public class UserTests {
	
	private User user;
	
	@Before
	public void setUp() {
		user = new User();
        user.setUsername("shivansh");
        user.setPassword("password");
	}
		
        @Test
    	public void test() {
    		new BeanTester().testBean(User.class);
    	}
	}