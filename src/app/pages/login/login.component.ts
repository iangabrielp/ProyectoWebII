import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthSpringService } from '../../services/auth-spring.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthSpringService, private router: Router) {}



  // constructor(private servicio: LoginService, private route: Router){}

  // email:any;
  // password:any;
  // rol:any;

  // login(formulario:any){ 
  //   this.servicio.postLogin(formulario.value).subscribe(acceso=>{
  //     let token = acceso.accessToken;
  //     if(token!='' && this.rol!=''){
  //       localStorage.setItem("login", "true");
  //       if(this.rol == "Normal"){
  //         localStorage.setItem("usuario", "true")
  //         this.route.navigate(['home'])
  //       } else if (this.rol == "Admin"){
  //         localStorage.setItem("admin", "true")
  //         this.route.navigate(['home'])
  //       }
  //     }
  //   })
  // }
}
