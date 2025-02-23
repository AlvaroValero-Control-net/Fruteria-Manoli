import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: PageNotFoundComponent },
];