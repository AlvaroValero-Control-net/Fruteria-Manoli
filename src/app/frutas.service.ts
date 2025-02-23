import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  frutas = [
    { id: 1, nombre: 'Manzana', precio: 1.5, favorita: false },
    { id: 2, nombre: 'Plátano', precio: 1.2, favorita: false },
    { id: 3, nombre: 'Naranja', precio: 1.8, favorita: false },
    { id: 4, nombre: 'Melón', precio: 2, favorita: false },
    { id: 5, nombre: 'Maracuyá', precio: 4, favorita: false }
  ];
  carrito: any[] = [];

  getFrutas() {
    return this.frutas;
  }

  getFruta(id: number) {
    return this.frutas.find(fruta => fruta.id === id);
  }

  toggleFavorita(fruta: any) {
    fruta.favorita = !fruta.favorita;
  }

  agregarAlCarrito(fruta: any) {
    this.carrito.push(fruta);
  }

  getCarrito() {
    return this.carrito;
  }

  eliminarDelCarrito(fruta: any) {
    const index = this.carrito.indexOf(fruta);
    if (index > -1) {
      this.carrito.splice(index, 1);
    }
  }
}
