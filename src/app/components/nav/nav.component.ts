import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  autenticacion():boolean{
    if(typeof window!=='undefined' && window.localStorage){
    return localStorage.getItem('login')==='true';
    }
    return false;
  }
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
  login(){ 
    localStorage.setItem("usuario", "true")
    localStorage.setItem("login", "true")
  }
}
