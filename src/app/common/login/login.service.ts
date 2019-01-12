import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cretion machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/machines', body);
    // , {
    //   headers: new HttpHeaders({
    //      'Authorization': `BEARER ${localStorage.getItem('access_token')}`,
    //   })
    // };
  }

  // creation membre
  sendMember(body) {
    return this.http.post('http://localhost:3000/api/equipe', body);
    // , {
    //   headers: new HttpHeaders({
    //      'Authorization': `BEARER ${localStorage.getItem('access_token')}`,
    //   })
    // };
  }
}
