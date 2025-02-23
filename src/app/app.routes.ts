import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: PageNotFoundComponent },
];
