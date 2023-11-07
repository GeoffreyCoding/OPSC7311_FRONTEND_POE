import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class BulletinboardServiceService {
  private readonly BASE_URL = 'https://localhost:3000/api/BulletinBoards';

  constructor(private http:HttpClient,private auth: AuthServiceService){}
  
  addBulletinboard_service(
    id:string,
    issueName: string,
    description: string,
    department: string
  ){
    const token = this.auth.getToken();
    console.log(id,issueName,description,department)
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

  deleteBulletinboard_Service(_id: string) {
    return this.http.delete(`${this.BASE_URL}/${_id}`, {
      headers: {
        'x-auth-token': this.auth.getToken() ?? '',
      },
    });
  }
  
  
}
