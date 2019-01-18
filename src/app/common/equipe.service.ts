import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  getEquipe(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/equipe`);
  }

    // creation membre
    sendMember(body) {
      return this.http.post('http://localhost:3000/api/equipe', body
        , {
          headers: this.headers
        });
    }
    // modification membre
    updateMembre(body, param) {
      return this.http.put(`http://localhost:3000/api/equipe/${param}`, body
        , {
          headers: this.headers
        });
    }

    // suppression  membre
    deleteMembre(param) {
      return this.http.delete(`http://localhost:3000/api/equipe/${param}`
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
