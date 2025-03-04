import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    { src: 'assets/img/library1.jpeg', alt: 'Biblioteca moderna' },
    { src: 'assets/img/library2.jpeg', alt: 'Biblioteca con libros antiguos' },
    { src: 'assets/img/library3.jpg', alt: 'Zona de lectura acogedora' }
  ];
}

