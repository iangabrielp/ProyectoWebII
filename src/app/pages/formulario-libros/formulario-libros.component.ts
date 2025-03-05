import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-libros.component.html',
  styleUrl: './formulario-libros.component.css'
})
export class FormularioLibrosComponent {
  constructor(private servicio: LibrosService){}

  nombre:any;
  autor:any;
  stock:any;
  img:any;

  guardar(formulario:any){
    this.servicio.postLibros(formulario.value).subscribe(()=>{
      window.location.reload();
    });

  }
}
