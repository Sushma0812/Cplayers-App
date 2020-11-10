package cplayer.userAuthentication.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cplayer.userAuthentication.app.model.UserAuthentication;
import cplayer.userAuthentication.app.repository.UserAuthenticationRepository;

@Service
public class UserAuthenticationServiceimplementation implements UserAuthenticationService{
	@Autowired
	private UserAuthenticationRepository userauthenticationRepository;
	
	@Override
	public boolean deleteUser(String username) {
		if(userauthenticationRepository.findById(username) != null) {
			userauthenticationRepository.deleteById(username);
			return true;
		}
		else return false;
	}


	@Override
	public boolean addUser(UserAuthentication u) {
		try {
			if(!userauthenticationRepository.existsById(u.getUsername())) {
				userauthenticationRepository.save(u);
				return true;
			}
			else return false;
		}catch(Exception e) {
			return false;
		}
		
	}


	@Override
	public boolean validate(String username, String password) {
		if(userauthenticationRepository.validate(username, password) != null) {
			return true;
		}else {
			return false;
		}
	}


	@Override
	public boolean updateUser(String username, String oldpass, String newpass) {
		if(userauthenticationRepository.existsById(username)) {
			if(userauthenticationRepository.validate(username, oldpass) != null) {
				try {
					userauthenticationRepository.deleteById(username);
					UserAuthentication u = new UserAuthentication();
					u.setUsername(username);
					u.setPassword(newpass);
					userauthenticationRepository.save(u);
					return true;
				}catch (Exception e) {
					return false;
				}
			}
			else return false;
		}
		else return false;
	}
	
	

}