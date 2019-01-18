import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  private _search: BehaviorSubject<any[]>;
  private dataStore: { result: any[] };

  constructor(private http: HttpClient) {
    this.dataStore = {
      result: []
    };

    this._search = new BehaviorSubject<any>([]);
  }

  get result() {
    return this._search.asObservable();
  }

  getSearch(param) {
    this.http.get<any>(`${environment.apiUrl}/recherche/${param}`).subscribe(data => {
      this.dataStore.result = data;
      this._search.next(Object.assign({}, this.dataStore).result);
    }, err => console.log('Impossible de charger les résultats'));
  }

  sendSearch(body) {
    return this.http.post(`${environment.apiUrl}/recherche`, body);
  }


}
