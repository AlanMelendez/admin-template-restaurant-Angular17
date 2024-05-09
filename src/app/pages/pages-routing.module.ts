import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ToasterComponent } from './toaster/toaster.component';
import { authGuard } from '../guards/auth.guard';
import { TicketsComponent } from './reports/tickets/tickets.component';
import { IngresosComponent } from './reports/ingresos/ingresos.component';
import { VentasDetalladoComponent } from './reports/ventas-detallado/ventas-detallado.component';
import { TablaDatosComponent } from './tabla/tabla-datos.component';
import { VentasProductoComponent } from './reports/ventas-producto/ventas-producto.component';
import { VentasCategoriaComponent } from './reports/ventas-categoria/ventas-categoria.component';
import { VentasProductosCanceladosComponent } from './reports/ventas-productos-cancelados/ventas-productos-cancelados.component';
import { AlmacenExistenciasComponent } from './reports/almacen-existencias/almacen-existencias.component';
import { AlmacenEntradasComponent } from './reports/almacen-entradas/almacen-entradas.component';
import { AlmacenSalidasComponent } from './reports/almacen-salidas/almacen-salidas.component';
import { AlmacenOrdenesCompraComponent } from './reports/almacen-ordenes-compra/almacen-ordenes-compra.component';
import { GastosGeneralComponent } from './reports/gastos-general/gastos-general.component';
import { BannerPublicitarioComponent } from './banner-publicitario/banner-publicitario.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [authGuard],

    children: [
      {
        path: 'Inicio',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      },

      // REPORTES
      {
        path: 'reportes/tickets',
        component: TicketsComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'reportes/ingresos',
        component: IngresosComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'reportes/ventas-detallado',
        component: VentasDetalladoComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'reportes/pruebas',
        component: TablaDatosComponent,
        data: { animation: 'fadeIn' },
      },

      //VENTAS
      {
        path: 'ventas/ventas-producto',
        component: VentasProductoComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'ventas/ventas-categoria',
        component: VentasCategoriaComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'ventas/producto-cancelados',
        component: VentasProductosCanceladosComponent,
        data: { animation: 'fadeIn' },
      },

      //ALMACEN
      {
        path: 'almacen/existencias',
        component: AlmacenExistenciasComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'almacen/entradas',
        component: AlmacenEntradasComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'almacen/salidas',
        component: AlmacenSalidasComponent,
        data: { animation: 'fadeIn' },
      },
      {
        path: 'almacen/ordenes-compra',
        component: AlmacenOrdenesCompraComponent,
        data: { animation: 'fadeIn' },
      },

      //GASTOS

      {
        path: 'gastos/gastos-general',
        component: GastosGeneralComponent,
        data: { animation: 'fadeIn' },
      },

      // Pruebas de componentes
      {
        path: 'pruebas',
        component: BannerPublicitarioComponent,
      },
      {
        path: 'heroes',
        component: HeroesComponent,
        data: { titulo: 'DataTable' },
      },
      {
        path: 'toaster',
        component: ToasterComponent,
        data: { titulo: 'Toaster' },
      },
      { path: '', redirectTo: '/dashboard/Inicio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
