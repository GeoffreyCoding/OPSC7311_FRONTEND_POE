import { Component,OnInit } from '@angular/core';
import { BulletinboardServiceService } from '../bulletin-service/bulletinboard-service.service';
import { Router } from '@angular/router'; // Import Router for navigation
import { FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-bulletinboard-create',
  templateUrl: './bulletinboard-create.component.html',
  styleUrls: ['./bulletinboard-create.component.css']
})
export class BulletinboardCreateComponent implements OnInit {

  BulletinBoards: any[] = [];
  bulletinID = new FormControl('');
  issueName = new FormControl('');
  description = new FormControl('');
  department = new FormControl('');
  errorFound = false;
  foundErrorMessage = '';

  constructor(
    private bulletinboardService: BulletinboardServiceService,
    private router: Router,
    private auth: AuthServiceService
  ) {}

  ngOnInit(): void {
    if(!this.auth.isLoggedIn){
      this.router.navigate(['/login']);
      return;
    }
  }
  //starts the process to add a post to the db
  onAddBulletinboard(e: Event) {
    e.preventDefault();
    this.errorFound = false;
  //checks if credentials are entered
    if (
      !this.issueName.value ||
      !this.description.value ||
      !this.department.value ||
      !this.bulletinID.value
    ) {
      this.errorFound = true;
      this.foundErrorMessage = 'Empty fields are not allowed!';
      console.log(e);
      return;
    }
  //sends a request to the service to add the post with the corresponding details
    this.bulletinboardService
      .addBulletinboard_service(
        this.bulletinID.value,
        this.issueName.value,
        this.description.value,
        this.department.value
      )
      .subscribe({
        next: (v) => {
          this.BulletinBoards.push(v);
          this.bulletinID.setValue('');
          this.issueName.setValue('');
          this.description.setValue('');
          this.department.setValue('');
        },
        error: (e) => {
          //error handling
          this.errorFound = true;
          this.foundErrorMessage = e.error;
          console.log(e);
        },
      });
  }
  
}
