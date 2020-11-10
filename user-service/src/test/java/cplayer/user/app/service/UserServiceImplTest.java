package cplayer.user.app.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import cplayer.user.app.model.User;
import cplayer.user.app.repository.UserRepository;



public class UserServiceImplTest {
	
	@Mock
     UserRepository userRepository;
	
	User user;
	
	@InjectMocks
    UserServiceImpl userService;
	
	@Before
	public void setUp() {
        MockitoAnnotations.initMocks(this);
        user = new User();
        user.setUsername("manju@123");
        user.setMobile("863959184");
        user.setImage("lets.say.sample.jpeg");
        user.setName("Pujari");
	}
	@Test
    public void addUserSuccess(){
        when(userRepository.save((User) any())).thenReturn(user);
        User userSaved = userRepository.save(user);
        assertEquals(user, userSaved);
    }
}