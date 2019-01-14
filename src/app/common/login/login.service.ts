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
  }

  // creation membre
  sendMember(body) {
    return this.http.post('http://localhost:3000/api/equipe', body);
  }

  // modification membre
  updateMembre(body, param) {
    return this.http.put(`http://localhost:3000/api/equipe/${param}`, body);
  }

  // suppression  membre
  deleteMembre(param) {
    return this.http.delete(`http://localhost:3000/api/equipe/${param}`);
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`http://localhost:3000/api/machines/${param}`, body);
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`http://localhost:3000/api/machines/${param}`);
  }

}
