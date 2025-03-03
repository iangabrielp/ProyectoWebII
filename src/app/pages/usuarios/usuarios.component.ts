import { Component } from '@angular/core';
import { FormularioUsuarioComponent } from '../../components/formulario-usuario/formulario-usuario.component';
import { TablaUsuariosComponent } from '../../components/tabla-usuarios/tabla-usuarios.component';
import { DetalleUsuariosComponent } from "../detalle-usuarios/detalle-usuarios.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormularioUsuarioComponent, TablaUsuariosComponent,],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
