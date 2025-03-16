import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  private API_AUTORES='http://localhost:8080';


//Mostrar Autor  
    getAutores():Observable<any[]>{
      return this.http.get<any[]>(`${this.API_AUTORES}/autores`);
    }

    //Guardar Autor
  postAutores(autor:any):Observable<any>{
    return this.http.post(`${this.API_AUTORES}/guardarAutor`, autor)
  }

  //Mostrar autor por id
  getAutorById(id:any):Observable<any>{
    return this.http.get(`${this.API_AUTORES}/${id}`)
  }
  
  //Eliminar autor
  deleteAutor(id:any):Observable<any>{
    return this.http.delete(`${this.API_AUTORES}/eliminarAutor/${id}`)
  }

  //Actualizar autor
  putAutor(autor:any):Observable<any>{
    return this.http.put(`${this.API_AUTORES}/${autor.id}`, autor)
  }
}
