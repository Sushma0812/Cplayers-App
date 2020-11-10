package cplayer.favourites.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favourites {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String username;
	private int pid;              
	private String country;        
	private String name;           
	private String fullName;      
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getMajorTeams() {
		return majorTeams;
	}
	public void setMajorTeams(String majorTeams) {
		this.majorTeams = majorTeams;
	}
	public String getCurrentAge() {
		return currentAge;
	}
	public void setCurrentAge(String currentAge) {
		this.currentAge = currentAge;
	}
	public String getImageURL() {
		return imageURL;
	}
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	public String getPlayingRole() {
		return playingRole;
	}
	public void setPlayingRole(String playingRole) {
		this.playingRole = playingRole;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	private String majorTeams;     
	private String currentAge;     
	private String imageURL;       
	private String playingRole;		
	private boolean status;
	@Override
	public String toString() {
		return "Favourites [id=" + id + ", username=" + username + ", pid=" + pid + ", country=" + country + ", name="
				+ name + ", fullName=" + fullName + ", majorTeams=" + majorTeams + ", currentAge=" + currentAge
				+ ", imageURL=" + imageURL + ", playingRole=" + playingRole + ", status=" + status + "]";
	}

}
