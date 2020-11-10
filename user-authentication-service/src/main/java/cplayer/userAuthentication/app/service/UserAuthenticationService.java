package cplayer.userAuthentication.app.service;

import cplayer.userAuthentication.app.model.UserAuthentication;

public interface UserAuthenticationService {
	public boolean deleteUser(String u);
	public boolean addUser(UserAuthentication u);
	public boolean validate(String username,String password);
	public boolean updateUser(String username, String oldpass, String newpass);
}
