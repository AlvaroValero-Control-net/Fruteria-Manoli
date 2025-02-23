import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../frutas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Detalles de la fruta</h2>
    <div *ngIf="fruta">
      <p>Nombre: {{ fruta.nombre }}</p>
      <p>Precio: {{ fruta.precio | currency }}</p>
      <button (click)="toggleFavorita()">{{ fruta.favorita ? 'Eliminar favorita' : 'Añadir favorita' }}</button>
      <button (click)="volverAtras()">Atrás</button>
    </div>
  `
})
export class DetalleProductoComponent {
  @Input() fruta: any;

  constructor(private frutasService: FrutasService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.fruta = this.frutasService.getFruta(+id);
    } else {
      this.fruta = null;
    }
  }

  toggleFavorita() {
    if (this.fruta) {
      this.frutasService.toggleFavorita(this.fruta);
    }
  }

  volverAtras() {
    this.router.navigate(['/producto']);
  }
}
