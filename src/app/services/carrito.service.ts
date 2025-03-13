import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatalogoComponent } from '../pages/catalogo/catalogo.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: CatalogoComponent[] = [];
  private carritoSubject = new BehaviorSubject<CatalogoComponent[]>(this.carrito);
 
  getCarrito() {
    return this.carritoSubject.asObservable();
  }
 
  agregarAlCarrito(libro: CatalogoComponent) {
    this.carrito.push(libro);
    this.carritoSubject.next(this.carrito);
  }
 
  eliminarDelCarrito(idLibro: string) {
    this.carrito = this.carrito.filter(libro => libro.id !== idLibro);
    this.carritoSubject.next(this.carrito);
  }
 
  calcularTotal() {
    return this.carrito.reduce((total, libro) => total + libro.precio, 0);
  }
 
  calcularIVA() {
    return this.calcularTotal() * 0.12; // IVA del 12%
  }
 
  calcularTotalConIVA() {
    return this.calcularTotal() + this.calcularIVA();
  }
}
