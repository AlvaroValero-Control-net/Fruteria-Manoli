import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',   // Vinculamos el HTML
  styleUrls: ['./navbar.component.css']     // Vinculamos el CSS
})
export class NavbarComponent {}