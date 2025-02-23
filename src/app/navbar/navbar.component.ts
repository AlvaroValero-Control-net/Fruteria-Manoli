import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Inicio</a>
      <a routerLink="/producto" routerLinkActive="active">Productos</a>
      <a routerLink="/carrito" routerLinkActive="active">Carrito</a>
    </nav>
  `
})
export class NavbarComponent {}
