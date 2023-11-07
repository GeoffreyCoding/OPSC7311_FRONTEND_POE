import { Component, OnInit} from '@angular/core';
import { BulletinboardServiceService } from '../bulletin-service/bulletinboard-service.service';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bulletinboard-display',
  templateUrl: './bulletinboard-display.component.html',
  styleUrls: ['./bulletinboard-display.component.css']
})
export class BulletinboardDisplayComponent implements OnInit{
  BulletinBoards: any[] = [];
  _id = new FormControl('');
  id = new FormControl('');
  issueName = new FormControl('');
  description = new FormControl('');
  department = new FormControl('');
  errorFound = false;
  foundErrorMessage = '';

  constructor(
    private BulletinService: BulletinboardServiceService,
    private router:Router,
    private auth:AuthServiceService) {}

  ngOnInit(): void {
    if(!this.auth.isLoggedIn){
      this.router.navigate(['/login']);
      return;
    }

    this.BulletinService.getBulletinboard_Service().subscribe({
      next: (v) => (this.BulletinBoards = v as any),
      error: (e) => console.log(e),
    })
  };

  onDelete(_id: string) {
    console.log(_id);
    this.BulletinService.deleteBulletinboard_Service(_id)
      .subscribe({
        next: () => {
          // Delete was successful, you can perform any necessary actions here
          console.log('Bulletin board deleted successfully.');
        },
        error: (error) => {
          // Handle and log the error
          console.error('Error deleting bulletin board:', error);
          // You can also set an error message property and display it to the user
          this.foundErrorMessage = 'Error deleting bulletin board.';
          this.errorFound = true;
        },
      });
  }
  
}
