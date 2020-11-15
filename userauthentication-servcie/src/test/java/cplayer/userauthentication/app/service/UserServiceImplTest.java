package cplayer.userauthentication.app.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import cplayer.userauthentication.app.model.User;
import cplayer.userauthentication.app.repository.UserRepository;
import cplayer.userauthentication.app.service.UserServiceImpl;


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
        user.setUsername("shivaagn");
        user.setPassword("password");
	}
	@Test
    public void addUserSuccess(){
        when(userRepository.save((User) any())).thenReturn(user);
        User userSaved = userRepository.save(user);
        assertEquals(user, userSaved);
    }
}