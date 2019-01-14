import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cretion machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/ajouterMachine', body);
    }

  // creation membre
    sendMember(body) {
    return this.http.post('http://localhost:3000/api/ajouterMembre', body);
    }

  // modification membre
  updateMembre(body, param) {
    return this.http.put(`http://localhost:3000/modifier/${param}`, body);
  }

  // suppression  membre
  deleteMembre(param) {
    return this.http.delete(`http://localhost:3000/supprimer/${param}`);
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`http://localhost:3000/modifiermachine/${param}`, body);
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`http://localhost:3000/supprimermachine/${param}`);
  }
}
