import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSpringService {

  private loginUrl = 'http://localhost:8080'; // URL del endpoint en Spring Boot

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.loginUrl}/login`, credentials);
  }

  getPostLogin(): Observable<any> {
    return this.http.get(`${this.loginUrl}/postLogin`);
  }
}
