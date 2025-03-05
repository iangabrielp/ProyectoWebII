import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-libros.component.html',
  styleUrl: './detalle-libros.component.css'
})
export class DetalleLibrosComponent {
  constructor(private servicio: LibrosService, private ruta: ActivatedRoute, private router: Router){}

  id:any;
  nombre:any;
  autor:any;
  stock:any;
  img:any;
  item:any;

  editar(formulario:any):void{
    this.servicio.putLibro(formulario.value).subscribe(()=>{
      this.router.navigate(['/libros'])
    })
  }
  ngOnInit(){
    this.ruta.params.subscribe(u => {
      this.servicio.getLibroById(u["idLibro"]).subscribe(libro=>{
        this.item=libro
        this.id=this.item.id
        this.nombre=this.item.nombre
        this.autor=this.item.autor
        this.stock=this.item.stock
        this.img=this.item.img
      })
    })
  }
}
