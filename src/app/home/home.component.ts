import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Bienvenida a frutería Manoli</h1>`
})
export class HomeComponent {}
