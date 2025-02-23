import { Injectable } from '@angular/core';
import { Fruta } from '../interfaces/fruta.interface'; // Importa la interfaz

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  frutas: Fruta[] = [
    { id: 1, nombre: 'Manzana', precio: 1.5, favorita: false },
    { id: 2, nombre: 'Plátano', precio: 1.2, favorita: false },
    { id: 3, nombre: 'Naranja', precio: 1.8, favorita: false },
    { id: 4, nombre: 'Melón', precio: 2, favorita: false },
    { id: 5, nombre: 'Maracuyá', precio: 4, favorita: false }
  ];

  carrito: Fruta[] = [];

  getFrutas(): Fruta[] {
    return this.frutas;
  }

  getFruta(id: number): Fruta | undefined {
    return this.frutas.find(fruta => fruta.id === id);
  }

  toggleFavorita(fruta: Fruta): void {
    fruta.favorita = !fruta.favorita;
  }

  agregarAlCarrito(fruta: Fruta): void {
    this.carrito.push(fruta);
  }

  getCarrito(): Fruta[] {
    return this.carrito;
  }

  eliminarDelCarrito(fruta: Fruta): void {
    this.carrito = this.carrito.filter(f => f.id !== fruta.id);
  }
}
