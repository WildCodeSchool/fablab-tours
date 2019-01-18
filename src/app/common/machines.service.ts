import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private http: HttpClient) { }


  getMachines(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/machines`);
  }

  // creation machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/machines', body
      , {
        headers: this.headers
      });
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`http://localhost:3000/api/machines/${param}`, body
      , {
        headers: this.headers
      });
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`http://localhost:3000/api/machines/${param}`
      , {
        headers: this.headers
      });
  }

  get headers() {
    return new HttpHeaders({
      'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
    });
  }
}
