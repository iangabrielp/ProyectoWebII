import { Component, Input } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito-usuario.component.html',
  styleUrl: './carrito-usuario.component.css'
})
export class CarritoUsuarioComponent {
  @Input() libros: any[] = [];
}