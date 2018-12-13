import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private http: HttpClient) { }


  getMachines(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/machines`);
  }


}
