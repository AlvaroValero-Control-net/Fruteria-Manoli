import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../../services/frutas.service';
import { Fruta } from '../../interfaces/fruta.interface'; // Importa la interfaz
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',    // Vinculamos el HTML
  styleUrls: ['./productos.component.css'] 
})
export class ProductosComponent implements OnInit {
  frutas: Fruta[] = [];
  frutasFiltradas: Fruta[] = [];
  mostrarFavoritas = false;

  constructor(private frutasService: FrutasService, private router: Router) {}

  ngOnInit(): void {
    this.frutas = this.frutasService.getFrutas();
    this.frutas.forEach(fruta => fruta.anadido = false);
    this.frutasFiltradas = this.frutas;
  }

  toggleFavoritas(): void {
    this.mostrarFavoritas = !this.mostrarFavoritas;
    this.frutasFiltradas = this.mostrarFavoritas
      ? this.frutas.filter(fruta => fruta.favorita)
      : this.frutas;
  }

  toggleFavorita(fruta: Fruta): void {
    this.frutasService.toggleFavorita(fruta);
  }

  verDetalles(id: number): void {
    this.router.navigate(['/producto', id]);
  }

  agregarAlCarrito(fruta: Fruta): void {
    this.frutasService.agregarAlCarrito(fruta);
    fruta.anadido = true;
  }
}