import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient ) { }

  // sendEmail(name, email, message) {
  //   const uri = 'http://localhost:3000/contact';
  //   const obj = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };
  //   return this.http.post(uri, obj);
  // }
  sendMessage(body) {
    return this.http.post('http://localhost:3000/formulaire', body);
    }
}
