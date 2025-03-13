import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { CarritoUsuarioComponent } from '../carrito-usuario/carrito-usuario.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, CarritoUsuarioComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor(private servicio: LibrosService, private servicioCarrito: CarritoService){}

  id:any;
  nombre:any;
  autor:any;
  stock:any;
  img:any;
  precio:any;
  libros: any[] = [];

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
      this.libros=Object.values(this.libros);
    })
  }

  agregarCarrito(libro:CatalogoComponent){
    
  }
}
