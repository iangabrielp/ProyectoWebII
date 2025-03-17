import { Component } from '@angular/core';
import { ListaDeseadosService } from '../../services/lista-deseados.service';

@Component({
  selector: 'app-lista-deseados',
  standalone: true,
  imports: [],
  templateUrl: './lista-deseados.component.html',
  styleUrl: './lista-deseados.component.css'
})
export class ListaDeseadosComponent {
  listaDeseados: any[] = [];

  constructor(private servicioLista: ListaDeseadosService){}

  ngOnInit() {
    this.servicioLista.getPosts().subscribe(libro=>{
      this.listaDeseados=libro;
    })
  }
  
  eliminar(id: number) {
    this.servicioLista.deleteData(id).subscribe(
      (respuesta) => {
        console.log('Producto eliminado del backend:', respuesta);
        // Remueve el libro de la lista localmente para actualizar la vista
        this.listaDeseados = this.listaDeseados.filter(libro => libro.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el producto del backend:', error);
      }
    );
  }
  
}
