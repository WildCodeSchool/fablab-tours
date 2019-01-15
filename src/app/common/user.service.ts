import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // creation membre
  sendMember(body) {
    return this.http.post('http://localhost:3000/api/equipe', body
        , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }
  // modification membre
  updateMembre(body, param) {
    return this.http.put(`http://localhost:3000/api/equipe/${param}`, body
        , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // suppression  membre
  deleteMembre(param) {
    return this.http.delete(`http://localhost:3000/api/equipe/${param}`
        , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // creation machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/machines', body
      , {
        headers: new HttpHeaders({
          'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
        })
      });
  }

  // modification machine
  updateMachine(body, param) {
    return this.http.put(`http://localhost:3000/api/machines/${param}`, body
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

  // suppression machine
  deleteMachine(param) {
    return this.http.delete(`http://localhost:3000/api/machines/${param}`
    , {
      headers: new HttpHeaders({
        'Authorization': `BEARER ${sessionStorage.getItem('access_token')}`,
      })
    });
  }

}
