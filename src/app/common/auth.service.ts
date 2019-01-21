import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token: string;
  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(`${environment.apiUrl}/auth`, {username, password})
      .pipe(
        map(result => {
          // stock le jwt token dans la session storage pour garder le user connecter
          sessionStorage.setItem('access_token', result.token );
          return true;
        })
      );
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

  loggedIn(): boolean {
    return (sessionStorage.getItem('access_token') !== null);
  }

}
