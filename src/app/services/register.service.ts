import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private API_REGISTER='http://localhost:3000/users'

  //Guardar Usuario
  postRegistro(usuario:any):Observable <any>{
    return this.http.post(this.API_REGISTER, usuario)
  }
}
