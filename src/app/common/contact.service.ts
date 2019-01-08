import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient ) { }

  sendMessage(body) {
    return this.http.post('http://localhost:3000/contact', body);
    }

    sendNewsletter(body) {
    return this.http.post('http://localhost:3000/subscribe', body);
    }
}
