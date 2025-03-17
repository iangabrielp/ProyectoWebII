import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { AutorService } from '../../services/autor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  constructor(private servicio: LibrosService, private servicioAutor:AutorService){}

  libros:any[]=[];
  libro:any={
    titulo:'',
    genero:'',
    fechapublicacion:'',
    img:'',
    autor:null,
    
  }
  autores:any[]=[]

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
    })
    this.servicioAutor.getAutores().subscribe(autor=>{
      this.autores=autor;
    })
  }
  guardar(formulario:any){
    this.servicio.postLibros(formulario.value).subscribe(()=>{
      window.location.reload()
    })
  }

  eliminar(id:any){
    this.servicio.deleteLibro(id).subscribe(()=>{
      window.location.reload();
    })
  }
}
