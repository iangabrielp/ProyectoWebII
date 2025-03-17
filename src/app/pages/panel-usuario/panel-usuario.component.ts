import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-panel-usuario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './panel-usuario.component.html',
  styleUrl: './panel-usuario.component.css'
})
export class PanelUsuarioComponent {
  usuarioAuth():boolean{
    if(typeof window!=='undefined' && window.localStorage){
      return localStorage.getItem('usuario')==='true';
    }
    return false;
  }
  adminAuth():boolean{
    if(typeof window!=='undefined' && window.localStorage){
      return localStorage.getItem('admin')==='true';
    }
    return false;
  }
  logOut(){
    localStorage.setItem("usuario", "false")
  localStorage.setItem("login", "false")
  localStorage.setItem("admin", "false")
  }
}
