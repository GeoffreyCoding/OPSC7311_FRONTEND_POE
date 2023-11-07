import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');
  hasError: boolean = false;
  errorMessage: string = '';

  constructor(public authService: AuthServiceService, private router: Router) {}

  ngOnInit() {}

  onSubmit(e: Event) {
      e.preventDefault();
      this.hasError = false;

      if(!this.username.value || !this.password.value){
        this.hasError = true;
        this.errorMessage = 'Please fill out all fields';
        return;
      }
      //starts login process
      this.authService.login(this.username.value, this.password.value).subscribe({
        next: (v) => {
          const { token } = v as any;
          localStorage.setItem('x-auth-token',token);
          this.router.navigate(['/']);
          console.log(token)
        },
        error: (e) =>{
          //error detection
          this.hasError = true;
          this.errorMessage = 'Error logging in, check username or password!'
          console.log(e)
        }
      })
        
  }
}
