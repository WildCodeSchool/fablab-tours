import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  constructor(private service: HttpClient) { }

  readAll(): Observable<any> {
    return this.service.get<any>('http://localhost:3000/api/calendar/events');
  }
}
