import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaDeseadosService } from '../../services/lista-deseados.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor(private servicio: LibrosService, private servicioLista: ListaDeseadosService){}

  libros:any[]=[];
  listaDeseados: any[] = [];

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
    })
  }

  agregarCarrito(libro: any) {
    if (!this.listaDeseados.includes(libro)) {
      this.servicioLista.postLista(libro).subscribe(
        (respuesta) => {
          console.log('Libro agregado exitosamente al backend:', respuesta);
          this.listaDeseados.push(libro);
        },
        (error) => {
          console.error('Error al agregar el libro al backend:', error);
        }
      );
    } else {
      console.log('El libro ya está en la lista.');
    }
  }
  
}
