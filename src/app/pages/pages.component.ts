import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
  encapsulation: ViewEncapsulation.None, // Permite que los estilos de ANGULAR MATERIAL se apliquen correctamente DESDE NUESTRO CSS
 animations: [
    //ingresa aqui las animaciones.
    // Fade In
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ opacity: 0 })),
    ]),
  ]),

  // Slide In From Left
  trigger('slideInFromLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
    ]),
  ]),

  // Scale Up
  trigger('scaleUp', [
    transition(':enter', [
      style({ transform: 'scale(0.5)' }),
      animate('300ms ease-in', style({ transform: 'scale(1)' })),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'scale(0.5)' })),
    ]),
  ]),

  // Rotate
  trigger('rotate', [
    transition(':enter', [
      style({ transform: 'rotate(-180deg)' }),
      animate('300ms ease-in', style({ transform: 'rotate(0deg)' })),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'rotate(180deg)' })),
    ]),
  ]),

  ]
})
export class PagesComponent {

  tituloProyecto:string = 'BDK';
  nombreUsuario= 'BDK';

  constructor(public router: Router) {
    this.tituloProyecto = environment.TITULO_PROYECTO;
    this.nombreUsuario = environment.NOMBRE_USUARIO_SISTEMA;
  }



  @ViewChild('sidenav') sidenav!: MatSidenav;
  submenus: { [key: string]: boolean } = {};
  menuItems: any[] = [
    {
      titulo: 'REPORTES',
      icono: 'fas fa-chart-bar',
      submenu: [
        { titulo: 'Tickets', url: 'reportes/pruebas', icon: 'far fa-circle' },
        { titulo: 'Ingresos', url: 'reportes/ingresos', icon: 'far fa-circle' },
        { titulo: 'Ventas Detallado', url: 'reportes/ventas-detallado', icon: 'far fa-circle' },
      ]
    },
    {
      titulo: 'VENTAS',
      icono: 'fas fa-tags',
      submenu: [
        { titulo: 'Ventas por Producto', url: 'ventas/ventas-producto', icon: 'far fa-circle' },
        { titulo: 'Ventas por Categoria', url: 'ventas/ventas-categoria', icon: 'far fa-circle' },
        { titulo: 'Productos Cancelados', url: 'ventas/producto-cancelados', icon: 'far fa-circle' },
      ]
    },
    {
      titulo: 'ALMACEN',
      icono: 'fas fa-warehouse',
      submenu: [
        { titulo: 'Reporte de Existencias', url: 'almacen/existencias', icon: 'far fa-circle' },
        { titulo: 'Entradas de Almacen', url: 'almacen/entradas', icon: 'far fa-circle' },
        { titulo: 'Salidas de Almacen', url: 'almacen/salidas', icon: 'far fa-circle' },
        { titulo: 'Ordenes de Compra', url: 'almacen/ordenes-compra', icon: 'far fa-circle' },
      ]
    },
    {
      titulo: 'GASTOS',
      icono: 'fas fa-money-bill',
      submenu: [
        { titulo: 'Reporte de gastos', url: 'gastos/gastos-general', icon: 'far fa-circle' },
      ]
    },
  ];

  ngOnInit() {
    // Abre los submenús automáticamente al cargar la página
    this.menuItems.forEach(item => {
      if (item.submenu && item.submenu.length > 0) {
        this.submenus[item.titulo] = true;
      }
    });
  }

  logout(){

    localStorage.removeItem('usuario');
    localStorage.removeItem('nombre');

    location.href='login';

  }

}
