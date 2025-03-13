import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  constructor(private servicio: LibrosService){}

  id:any;
  nombre:any;
  autor:any;
  stock:any;
  img:any;
  libros:any;

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
      this.libros=Object.values(this.libros);
    })
  }

  // ngOnInit(){
  //   this.servicio.getLibros().subscribe(libro=>{
  //     this.libros=libro;
  //   });
  // }

  eliminar(id:any){
    this.servicio.deleteLibro(id).subscribe(()=>{
      window.location.reload();
    })
  }
}
