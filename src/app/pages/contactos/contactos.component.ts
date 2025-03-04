import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  contact = {
    email: 'contacto@bibliotecavirtual.com',
    phone: '+123 456 7890',
    address: 'Av. Principal #123, Ciudad, País'
  };

}
