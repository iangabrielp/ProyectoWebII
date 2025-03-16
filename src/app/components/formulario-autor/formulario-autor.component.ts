import { Component } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-autor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-autor.component.html',
  styleUrl: './formulario-autor.component.css'
})
export class FormularioAutorComponent {

  constructor(private servicio: AutorService){}
  
  autor:any={
  ci:'',
  nombre:'',
  apellido:''
  }
  


  
    guardar(formulario:any){
      this.servicio.postAutores(formulario.value).subscribe(()=>{
        window.location.reload()
      })
    }
}
