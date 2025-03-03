import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css'
})
export class DetalleUsuariosComponent {
  constructor (private servicio:UsuariosService, private ruta:ActivatedRoute, private router:Router){}

  id:any;
  nombre:any;
  email:any;
  password:any;
  confirmarPassword:any;
  tipoUsuario:any;
  item:any;

  editar(formulario:any):void{
    this.servicio.putUsuario(formulario.value).subscribe(()=>{
      this.router.navigate(['/usuarios'])
    });

  }
  ngOnInit(){
    this.ruta.params.subscribe(u=>{
      this.servicio.getUsuarioById(u["idUsuario"]).subscribe(usuario=>{
        this.item=usuario
        this.id=this.item.id
        this.nombre=this.item.nombre
        this.email=this.item.email
        this.password=this.item.password
        this.confirmarPassword=this.item.confirmarPassword
        this.tipoUsuario=this.item.tipoUsuario

      })
    })
  }
}
