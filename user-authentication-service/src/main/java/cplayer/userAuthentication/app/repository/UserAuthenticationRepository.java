package cplayer.userAuthentication.app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cplayer.userAuthentication.app.model.UserAuthentication;

@Repository
public interface UserAuthenticationRepository extends CrudRepository<UserAuthentication, String> {

	@Query("select u from User u where u.username= ?1 and u.password= ?2")
	UserAuthentication validate(String username, String password);
}