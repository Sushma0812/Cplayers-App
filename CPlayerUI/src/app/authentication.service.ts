import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAuthentication } from './userAuthentication';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private httpClient: HttpClient) { }


  public signup(userauth: UserAuthentication): Observable<any> {
    return this.httpClient.post<UserAuthentication>('http://localhost:8000/api/auth/register', userauth).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  
  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  
  getBearerToken() {
    return sessionStorage.getItem('token');
  }

  
  public login(userinfo: UserAuthentication): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8000/api/auth/login', userinfo).pipe(
      map(
        userData => {
          return userData;
        }));
  }


  public deleteUser(username: string, token: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8000/api/auth/pro/user?username=${username}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  public updateUser(user: UserAuthentication, pass: string, token: string): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8000/api/auth/pro/user`,{"username":`${user.username}`,"oldpass":`${user.password}`,"newpass":`${pass}`} ,{
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}
