import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  private API_LIBROS = 'http://localhost:8080';

  //Guardar Libro
  postLibros(libro:any):Observable<any>{
    return this.http.post(`${this.API_LIBROS}/guardarLibro`, libro)
  }

  //Mostrar libro
  getLibros():Observable<any>{
    return this.http.get(`${this.API_LIBROS}/libros`)
  }

  //Mostrar libro por id
  getLibroById(id:any):Observable<any>{
    return this.http.get(`${this.API_LIBROS}/${id}`)
  }
  
  //Eliminar libro
  deleteLibro(id:any):Observable<any>{
    return this.http.delete(`${this.API_LIBROS}/eliminarLibro/${id}`)
  }

  //Actualizar libro
  putLibro(libro:any):Observable<any>{
    return this.http.put(`${this.API_LIBROS}/${libro.id}`, libro)
  }
}
