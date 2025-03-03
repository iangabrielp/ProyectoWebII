import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  constructor (private servicio: UsuariosService){}

  nombre:any;
  email:any;
  password:any;
  confirmarPassword:any;
  tipoUsuario:any;

  guardar(formulario:any){
    this.servicio.postUsuarios(formulario.value).subscribe(()=>{
      window.location.reload()
    });
    

  }


}
