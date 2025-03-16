import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(private http: HttpClient) { }
  private API_PRESTAMOS = 'http://localhost:8080';
  
    //Guardar Prestamo
    postPrestamos(prestamo:any):Observable<any>{
      return this.http.post(`${this.API_PRESTAMOS}/guardarPrestamo`, prestamo)
    }
  
    //Mostrar Prestamo
    getPrestamos():Observable<any>{
      return this.http.get(`${this.API_PRESTAMOS}/prestamos`)
    }
  
    //Mostrar prestamo por id
    getPrestamoById(id:any):Observable<any>{
      return this.http.get(`${this.API_PRESTAMOS}/${id}`)
    }
    
    //Eliminar Prestamo
    deletePrestamo(id:any):Observable<any>{
      return this.http.delete(`${this.API_PRESTAMOS}/eliminarPrestamo/${id}`)
    }
  
    //Actualizar prestamo
    putPrestamo(prestamo:any):Observable<any>{
      return this.http.put(`${this.API_PRESTAMOS}/${prestamo.id}`, prestamo)
    }
}
