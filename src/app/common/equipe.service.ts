import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  getEquipe(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/equipe`);
  }

    // creation membre
    sendMember(body) {
      return this.http.post(`${environment.apiUrl}/equipe`, body
        , {
          headers: this.headers
        });
    }
    // modification membre
    updateMembre(body, param) {
      return this.http.put(`${environment.apiUrl}/equipe/${param}`, body
        , {
          headers: this.headers
        });
    }

    // suppression  membre
    deleteMembre(param) {
      return this.http.delete(`${environment.apiUrl}/equipe/${param}`
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
