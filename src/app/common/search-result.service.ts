import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http: HttpClient) { }

  getMachinesRechercher(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/recherche/:cle`);
  }
}
