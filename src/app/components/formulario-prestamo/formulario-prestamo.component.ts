import { Component } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { LibrosService } from '../../services/libros.service';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-prestamo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-prestamo.component.html',
  styleUrl: './formulario-prestamo.component.css'
})
export class FormularioPrestamoComponent {

  constructor(private servicio: PrestamoService, private servicioLibro:LibrosService, private servicioUsuario:UsuariosService){}
  
    prestamo:any={
      descripcion:'',
      fechaPrestamo:'',
      fechaDevolucion:'',
      libro:null,
      bibliotecario:null
    }
    libros:any[]=[]
    bibliotecarios:any[]=[]
  
    ngOnInit(){
      this.servicioLibro.getLibros().subscribe(libro=>{
        this.libros=libro;
      })
      this.servicioUsuario.getUsuario().subscribe(usuario=>{
        this.bibliotecarios=usuario;
      })
    }
  
    guardar(formulario:any){
      this.servicio.postPrestamos(formulario.value).subscribe(()=>{
        window.location.reload()
      })
    }
}
