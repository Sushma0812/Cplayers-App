import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserAuthentication } from '../userAuthentication';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { RouterService } from '../router.service';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
// imlementation of all edit user functionalities
export class EditProfileComponent implements OnInit {

  token: string;
  nam: string;
  val: string;

  user: User = new User();
  userauth: UserAuthentication = new UserAuthentication();

  // dependency injection of required services
  constructor(private route: RouterService, private userser: UserService,
    private auth: AuthenticationService, private favser: FavouritesService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }

    this.nam = sessionStorage.getItem('username');
    this.token = sessionStorage.getItem('token');

    this.userser.getdetails(this.nam, this.token).subscribe(
      res => this.user = res,
      err => console.log(err)
    )
  }

  mobileForm = new FormGroup({
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  })

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  get mobile() {
    return this.mobileForm.get('mobile');
  }
  get oldPassword() {
    return this.passwordForm.get('oldPassword');
  }
  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  img: string;

  onFileChanged(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.img = reader.result.toString();
    })
  }

  image() {
    this.user.image = this.img;
    console.log(this.user);
    this.userser.modifyUser(this.user, this.token).subscribe(
      res => console.log(res),
      err => {
        if (err.statusText === "OK") {
          console.log("success");
          location.reload();
        }
      }
    )
  }

  // method to make a request for changing the mobile number
  mobiles() {
    this.user.mobile = this.mobileForm.value.mobile;
    console.log(this.user);
    console.log(this.token);

    this.userser.modifyUser(this.user, this.token).subscribe(
      res => console.log(res),
      err => {
        if (err.statusText === "OK") {
          console.log("success");
          location.reload();
        }
      }
    )
  }

  password() {
    this.userauth.password = this.passwordForm.value.oldPassword;
    this.userauth.username = this.nam;
    console.log(this.userauth);
    console.log(this.token);
    this.auth.updateUser(this.userauth, this.passwordForm.value.newPassword, this.token).subscribe(
      res => console.log(res),
      err => {
        if (err.statusText === "OK") {
          sessionStorage.clear();
          this.route.tologin();
        }
      }
    )
  }

  deleteUser(val) {
    
  }
}
