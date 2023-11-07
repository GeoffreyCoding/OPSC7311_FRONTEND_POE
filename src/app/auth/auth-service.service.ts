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

loggout(): void {
  localStorage.removeItem('x-auth-token');
}

  login(username: string, password: string){
    return this.http.post(
      'https://localhost:3000/api/auth',
      { username, password }
    )
  }

  getToken(): string | null {
    return localStorage.getItem('x-auth-token');
  }

}
