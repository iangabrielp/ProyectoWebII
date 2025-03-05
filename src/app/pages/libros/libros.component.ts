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

  libros: any[] = [];

  ngOnInit(){
    this.servicio.getLibros().subscribe(libro=>{
      this.libros=libro;
    });
  }

  eliminar(id:any){
    this.servicio.deleteLibro(id).subscribe(()=>{
      window.location.reload();
    })
  }
}
