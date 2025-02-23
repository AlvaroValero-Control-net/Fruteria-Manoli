import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../../services/frutas.service';
import { Fruta } from '../../interfaces/fruta.interface'; // Importa la interfaz

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',    // Vinculamos el HTML
  styleUrls: ['./carrito.component.css'] 
})
export class CarritoComponent {
  carrito: Fruta[] = [];

  constructor(private frutasService: FrutasService) {
    this.carrito = this.frutasService.getCarrito();
  }

  eliminarDelCarrito(fruta: Fruta): void {
    this.frutasService.eliminarDelCarrito(fruta);
    this.carrito = this.frutasService.getCarrito(); // Actualiza el carrito después de eliminar la fruta
  }
}