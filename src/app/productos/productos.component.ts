import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../frutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Listado de frutas disponibles</h2>
    <button (click)="toggleFavoritas()">{{ mostrarFavoritas ? 'Mostrar todas' : 'Mostrar favoritas' }}</button>
    <ul>
      <li *ngFor="let fruta of frutasFiltradas">
        {{ fruta.nombre }} - {{ fruta.precio | currency }}
        <button (click)="toggleFavorita(fruta)">{{ fruta.favorita ? 'Eliminar favorita' : 'Añadir favorita' }}</button>
        <button (click)="verDetalles(fruta.id)">Ver detalles</button>
        <button (click)="agregarAlCarrito(fruta)">{{ fruta.anadido ? 'Añadido' : 'Añadir al carrito' }}</button>
      </li>
    </ul>
  `
})
export class ProductosComponent implements OnInit {
  frutas: any[] = [];
  frutasFiltradas: any[] = [];
  mostrarFavoritas = false;

  constructor(private frutasService: FrutasService, private router: Router) {}

  ngOnInit() {
    this.frutas = this.frutasService.getFrutas();
    this.frutas.forEach(fruta => fruta.anadido = false);  // Inicializa la propiedad anadido
    this.frutasFiltradas = this.frutas;
  }

  toggleFavoritas() {
    this.mostrarFavoritas = !this.mostrarFavoritas;
    this.frutasFiltradas = this.mostrarFavoritas ? this.frutas.filter(fruta => fruta.favorita) : this.frutas;
  }

  toggleFavorita(fruta: any) {
    this.frutasService.toggleFavorita(fruta);
  }

  verDetalles(id: number) {
    this.router.navigate(['/producto', id]);
  }

  agregarAlCarrito(fruta: any) {
    this.frutasService.agregarAlCarrito(fruta);
    fruta.anadido = true;  // Actualiza la propiedad anadido
  }
}
