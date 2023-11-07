import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username = new FormControl('');
  Email = new FormControl('');
  Surname = new FormControl('');
  FirstName = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');
  hasError = false;
  errorMessage = '';

  constructor(
    public authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
    //starts signup process
  onSubmit(e : Event) {
    e.preventDefault();
    this.hasError = false;
    //checking for empty fields
    if (
      !this.username.value ||
      !this.Email.value ||
      !this.FirstName.value ||
      !this.confirmPassword.value ||
      !this.password.value ||
      !this.Surname.value
    ) {
      this.hasError = true;
      this.errorMessage = 'Please fill out all fields';
      return;
    }
    //ensuring passwords match
    if (this.password.value !== this.confirmPassword.value) {
      this.hasError = true;
      this.errorMessage = 'Passwords do not match!';
      return;
    }
    //creating user
    this.authService.signup(
      this.username.value,
      this.password.value,
      this.Email.value,
      this.FirstName.value,
      this.Surname.value
    ).subscribe({
      next: (v) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        //error for 201
        if (err.status !== 201) {
          //error handling for all other errors
          this.hasError = true;
          this.errorMessage = 'Error creating account, please check your details';
          console.log(err);
        }else{
          this.router.navigate(['/login']);
        }
        
      },
    });
  }
}
