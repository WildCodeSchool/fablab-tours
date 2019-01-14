import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cretion machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/machines', body
      , {
        headers: new HttpHeaders({
          'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
        })
      });
  }

  // creation membre
  sendMember(body) {
    return this.http.post('http://localhost:3000/api/equipe', body
     , {
       headers: new HttpHeaders({
          'Authorization': `BEARER ${localStorage.getItem('access_token')}`,
       })
     });
  }

  // modification membre
  updateMembre(body, param) {
    return this.http.put(`http://localhost:3000/modifier/${param}`, body
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // suppression  membre
  deleteMembre(param) {
    return this.http.delete(`http://localhost:3000/supprimer/${param}`
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`http://localhost:3000/modifiermachine/${param}`, body
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`http://localhost:3000/supprimermachine/${param}`
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

}
