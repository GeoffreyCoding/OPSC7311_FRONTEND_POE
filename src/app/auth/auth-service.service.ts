import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private readonly URL = 'https://localhost:3000';
  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean{
    const token = localStorage.getItem('x-auth-token');
    return token ? true : false;
  }
//starts signup process
  signup(
    username: string,
    password: string,
    Email: string,
    FirstName: string,
    Surname: string
  ){
    console.log(password)
    return this.http.post('https://localhost:3000/api/users', {
      username,
      password,
      Email,
      FirstName,
      Surname,
    });
  }
//loggout users by removing auth token
loggout(): void {
  localStorage.removeItem('x-auth-token');
}
//login users with username and passowrd
  login(username: string, password: string){
    return this.http.post(
      'https://localhost:3000/api/auth',
      { username, password }
    )
  }
//gets the currently signed in users token
  getToken(): string | null {
    return localStorage.getItem('x-auth-token');
  }

}
