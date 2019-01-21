import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private http: HttpClient) { }


  getMachines(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/machines`);
  }

  // creation machine
  sendMachine(body) {
    return this.http.post(`${environment.apiUrl}/machines`, body
      , {
        headers: this.headers
      });
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`${environment.apiUrl}/machines/${param}`, body
      , {
        headers: this.headers
      });
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`${environment.apiUrl}/machines/${param}`
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
