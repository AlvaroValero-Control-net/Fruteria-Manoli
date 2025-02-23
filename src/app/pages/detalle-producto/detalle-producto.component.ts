import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasService } from '../../services/frutas.service';
import { Fruta } from '../../interfaces/fruta.interface'; // Importa la interfaz
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',    // Vinculamos el HTML
  styleUrls: ['./detalle-producto.component.css'] 
})
export class DetalleProductoComponent {
  @Input() fruta!: Fruta;

  constructor(
    private frutasService: FrutasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const frutaEncontrada = this.frutasService.getFruta(+id);
      if (frutaEncontrada) {
        this.fruta = frutaEncontrada;
      }
    }
  }

  toggleFavorita(): void {
    this.frutasService.toggleFavorita(this.fruta);
  }

  volverAtras(): void {
    this.router.navigate(['/producto']);
  }
}