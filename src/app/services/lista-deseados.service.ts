import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDeseadosService {

  constructor(private http: HttpClient) { }

  private API_LISTA='http://localhost:3000/lista'

  getPosts():Observable<any>{
    return this.http.get<any>(this.API_LISTA);
  }

  postLista(libro: any): Observable<any> {
    return this.http.post<any>(this.API_LISTA, libro);
  }
  

  getPostById(id:number):Observable<any>{
    return this.http.get(`${this.API_LISTA}/${id}`)
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.API_LISTA}/${id}`);
  }
}
