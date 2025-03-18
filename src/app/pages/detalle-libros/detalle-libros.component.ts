import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-detalle-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-libros.component.html',
  styleUrl: './detalle-libros.component.css'
})
export class DetalleLibrosComponent {
  constructor(private servicio: LibrosService, private ruta: ActivatedRoute, private router: Router, private servicioAutor:AutorService){}

  libro:any={
    id:null,
    titulo:'',
    genero:'',
    fechapublicacion:'',
    img:'',
    autor:null,
  }
  autores:any[]=[]

  editar(formulario:any):void{
    this.servicio.putLibro(formulario.value).subscribe(()=>{
      this.router.navigate(['/libros'])
    })
    
  }
  ngOnInit(){
    this.servicioAutor.getAutores().subscribe(autor=>{
      this.autores=autor;
    })
  }
}
