import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoUsuarioComponent } from '../carrito-usuario/carrito-usuario.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor(private servicio: LibrosService){}

  libros:any[]=[];

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
    })
  }

  agregarCarrito(libro:CatalogoComponent){
    
  }
}
