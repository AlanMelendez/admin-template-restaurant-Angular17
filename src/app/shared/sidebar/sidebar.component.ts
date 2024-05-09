import { Component } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  tituloProyecto:string = 'BDK';
  constructor() {
    this.tituloProyecto = environment.TITULO_PROYECTO;
    this.nombreUsuario = environment.NOMBRE_USUARIO_SISTEMA;
  }

  nombreUsuario= 'BDK';

  public menuItems:any[]=[
    {
      titulo:'REPORTES',
      icono:'nav-icon fas fa-chart-bar',
      submenu:[
        {titulo:'Tickets', url:'heroes', icon:'far fa-circle' },
        {titulo:'Ingresos', url:'toaster', icon:'far fa-circle' },
        {titulo:'Ventas Detallado', url:'toaster', icon:'far fa-circle' },
      ]
    },
    {
      titulo:'VENTAS',
      icono:'nav-icon fas fa-tags',
      submenu:[
        {titulo:'Ventas por Producto', url:'heroes', icon:'far fa-circle' },
        {titulo:'Ventas por Categoria', url:'toaster', icon:'far fa-circle' },
        {titulo:'Productos Cancelados', url:'toaster', icon:'far fa-circle' },
      ]
    },
    {
      titulo:'ALMACEN',
      icono:'nav-icon fas  fa-warehouse',
      submenu:[
        {titulo:'Reporte de Existencias', url:'heroes', icon:'far fa-circle' },
        {titulo:'Entradas de ALmacen', url:'toaster', icon:'far fa-circle' },
        {titulo:'Salidas de Almacen', url:'toaster', icon:'far fa-circle' },
        {titulo:'Ordenes de Compra', url:'toaster', icon:'far fa-circle' },
      ]
    },
    {
      titulo:'GASTOS',
      icono:'nav-icon fas fa-money-bill',
      submenu:[
        {titulo:'Reporte de gastos', url:'heroes', icon:'far fa-circle' },

      ]
    },

  ];

  logout(){

    localStorage.removeItem('usuario');
    localStorage.removeItem('nombre');

    location.href='login';

  }



}
