package cplayer.userAuthentication.app.repository;

import org.springframework.data.repository.CrudRepository;

import cplayer.userAuthentication.app.model.UserAuthentication;


public interface UserAuthenticationRepository extends CrudRepository<UserAuthentication, String> {

}
