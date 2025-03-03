import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private API_USUARIOS='http://localhost:3000/usuarios'

  //Mostrar Usuario
  getUsuario():Observable<any>{
    return this.http.get(this.API_USUARIOS)
  }

  //Mostrar Usuario por id
  getUsuarioById(id:any):Observable <any>{
    return this.http.get(`${this.API_USUARIOS}/${id}`);
  }


  //Guardar Usuario
  postUsuarios(usuario:any):Observable <any>{
    return this.http.post(this.API_USUARIOS, usuario)
  }

  //Actualizar Usuario
  putUsuario(usuario:any):Observable<any>{
    return this.http.put(`${this.API_USUARIOS}/${usuario.id}`,usuario)

  }

  //Eliminar Usuario
  deleteUsuarios(id:any):Observable<any>{
    return this.http.delete(`${this.API_USUARIOS}/${id}`)
  }
}
