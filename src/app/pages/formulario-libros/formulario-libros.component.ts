import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-formulario-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-libros.component.html',
  styleUrl: './formulario-libros.component.css'
})
export class FormularioLibrosComponent {
  constructor(private servicio: LibrosService, private servicioAutor:AutorService){}

  libro:any={
    titulo:'',
    genero:'',
    fechapublicacion:'',
    img:'',
    autor:null,
    
  }
  autores:any[]=[]

  ngOnInit(){
    this.servicioAutor.getAutores().subscribe(autor=>{
      this.autores=autor;
    })
  }

  guardar(formulario:any){
    this.servicio.postLibros(formulario.value).subscribe(()=>{
      window.location.reload()
    })
  }
  
}
