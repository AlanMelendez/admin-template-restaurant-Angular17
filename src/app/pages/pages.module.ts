import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ToasterComponent } from './toaster/toaster.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
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



@NgModule({
  declarations: [
    DashboardComponent,
    HeroesComponent,
    ToasterComponent,
    PagesComponent,
    TicketsComponent,
    IngresosComponent,
    VentasDetalladoComponent,
    TablaDatosComponent,
    VentasProductoComponent,
    VentasCategoriaComponent,
    VentasProductosCanceladosComponent,
    AlmacenExistenciasComponent,
    AlmacenEntradasComponent,
    AlmacenSalidasComponent,
    AlmacenOrdenesCompraComponent,
    GastosGeneralComponent,
    BannerPublicitarioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PagesModule {

}
