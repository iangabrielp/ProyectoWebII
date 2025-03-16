import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  private API_AUTORES='http://localhost:8080';
  
    getAutores():Observable<any[]>{
      return this.http.get<any[]>(`${this.API_AUTORES}/autores`);
    }
}
