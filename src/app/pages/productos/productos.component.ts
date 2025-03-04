import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: any[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get<any[]>('assets/productos.json').subscribe(data=>{
      this.productos=data;
    })
  }
}
