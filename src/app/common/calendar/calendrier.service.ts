import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  constructor(private service: HttpClient) { }

  readAll(): Observable<any> {
    return this.service.get<any>(`${environment.apiUrl}/calendar/events`);
  }
}
