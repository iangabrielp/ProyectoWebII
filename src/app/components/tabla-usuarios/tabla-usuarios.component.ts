import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
export class TablaUsuariosComponent {

  constructor (private servicio:UsuariosService){}

  usuarios:any[]=[]

  ngOnInit(){
    this.servicio.getUsuario().subscribe(usuario=>{
      this.usuarios=usuario;
    });
  }

  eliminar(id:any){
    this.servicio.deleteUsuarios(id).subscribe(()=>{
      window.location.reload()
    })
  }
}
