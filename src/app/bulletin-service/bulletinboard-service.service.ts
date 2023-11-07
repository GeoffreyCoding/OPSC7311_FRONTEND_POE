import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class BulletinboardServiceService {
  private readonly BASE_URL = 'https://localhost:3000/api/BulletinBoards';

  constructor(private http:HttpClient,private auth: AuthServiceService){}
  //add bulletin board to db
  addBulletinboard_service(
    id:string,
    issueName: string,
    description: string,
    department: string
  ){
    //get auth token
    const token = this.auth.getToken();
    return this.http
      .post(
        this.BASE_URL,
        {
          id,
          issueName,
          description,
          department
        },
        {
          headers: {
            'x-auth-token': token ?? ''
          }
        }
      )
  }
  //get bulletin boards from db
  getBulletinboard_Service() {
    const token = this.auth.getToken();
    console.log(token)
    return this.http.get(
      this.BASE_URL,{
        headers: {
          'x-auth-token' : token ?? '',
        },
      });
  }
//delete bulletin board from db
  deleteBulletinboard_Service(_id: string) {
    return this.http.delete(`${this.BASE_URL}/${_id}`, {
      headers: {
        'x-auth-token': this.auth.getToken() ?? '',
      },
    });
  }
  
  
}
