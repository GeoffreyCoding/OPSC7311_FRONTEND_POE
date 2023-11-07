import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router,private auth:AuthServiceService) {}

  ngOnInit(): void {}

  logout() {
    //clearing the token
    this.auth.loggout();
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
