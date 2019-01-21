import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  constructor(private http: HttpClient) { }

  // recuperation partenaires
  getPartenaire(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/partenaires`);
  }

  // recuperation partenaire financier
  getPartenaireFinancier(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/partenaires/financiers`);
  }

  // recuperation partenaire technique
  getPartenaireTechnique(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/partenaires/techniques`);
  }

  // creation parteanire
  sendPartenaire(body) {
    return this.http.post(`${environment.apiUrl}/partenaires`, body
      , {
        headers: this.headers
      });
  }

  // modification partenaire
  updatePartenaire(body, param) {
    return this.http.put(`${environment.apiUrl}/partenaires/${param}`, body
      , {
        headers: this.headers
      });
  }

  // suppression partenaire
  deletePartenaire(param) {
    return this.http.delete(`${environment.apiUrl}/partenaires/${param}`
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
