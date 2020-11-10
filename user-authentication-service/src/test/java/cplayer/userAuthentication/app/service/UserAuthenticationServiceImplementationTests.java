package cplayer.userAuthentication.app.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import cplayer.userAuthentication.app.model.UserAuthentication;
import cplayer.userAuthentication.app.repository.UserAuthenticationRepository;



public class UserAuthenticationServiceImplementationTests{
	
	@Mock
     UserAuthenticationRepository userRepository;
	
	UserAuthentication user;
	
	@InjectMocks
    UserAuthenticationServiceImplementationTests userService;
	
	@Before
	public void setUp() {
        MockitoAnnotations.initMocks(this);
        user = new UserAuthentication();
        user.setUsername("anusha");
        user.setPassword("anu123");
	}
	@Test
    public void addUserSuccess(){
        when(userRepository.save((UserAuthentication) any())).thenReturn(user);
        UserAuthentication userSaved = userRepository.save(user);
        assertEquals(user, userSaved);
    }
}