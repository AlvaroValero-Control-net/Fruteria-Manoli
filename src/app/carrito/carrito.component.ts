import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../frutas.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Resumen de la compra</h2>
    <ul>
      <li *ngFor="let fruta of carrito">
        {{ fruta.nombre }} - {{ fruta.precio | currency }}
        <button (click)="eliminarDelCarrito(fruta)">Eliminar</button>
      </li>
    </ul>
  `
})
export class CarritoComponent {
  carrito: any[] = [];

  constructor(private frutasService: FrutasService) {
    this.carrito = this.frutasService.getCarrito();
  }

  eliminarDelCarrito(fruta: any) {
    this.frutasService.eliminarDelCarrito(fruta);
    this.carrito = this.frutasService.getCarrito();  // Actualiza el carrito después de eliminar la fruta
  }
}
