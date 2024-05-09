import { Component, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as xlsx from 'xlsx';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface TicktData {
  ticket: number;
  fechaHora: string;
  nombreCajero: string;
  nombreMesero: string;
  numeroMesa: number;
  importeTotal: number;
  propina: number;
  pagoTotal: number;
  cambios: number;
  nombreCliente: string;
  nombreRepartidor: string;
}
@Component({
  selector: 'app-ventas-detallado',
  templateUrl: './ventas-detallado.component.html',
  styleUrl: './ventas-detallado.component.css',
})
export class VentasDetalladoComponent {
  verde: string = 'var(--verde)';

  displayedColumns: any[] = [
    'NombreCategoria',
    'IDProducto',
    'NombreProducto',
    'Cantidad',
    'PrecioVenta',
    'Descuento',
    'IEPS',
    'IVA',
    'ISR',
    'ImporteTotal',
    'Costo',
    'Importe',
    'Ganancia'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Obtenemos la tabla, para poder usarla y descargar en PDF y Excel
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private MatPaginatorIntl: MatPaginatorIntl) {
    this.MatPaginatorIntl.itemsPerPageLabel = 'Registros por página';
    this.MatPaginatorIntl.nextPageLabel = 'Siguiente';
    this.MatPaginatorIntl.previousPageLabel = 'Anterior';
    this.dataPrueba();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.testData);
  }

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   debugger;
  //  let columnas =this.displayedColumns.map(t => t['ImporteTotal']).reduce((acc, value) => acc + value, 0);

  //   console.log(columnas);
  //   return columnas;
  // }
  getTotalCost(columna: any) {
    //Si existen elementos filtrados:
    if (this.dataSource.filteredData.length > 0) {
      let sumaTotal = 0;
      this.dataSource.filteredData.forEach((row) => {
        sumaTotal += row[columna];
      });
      return sumaTotal;
    }
    let sumaTotal = 0;
    this.dataSource.data.forEach((row) => {
      sumaTotal += row[columna];
    });
    return sumaTotal;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  downloadPDF() {
    const doc = new jsPDF('landscape'); // Establece la orientación a landscape
    doc.text(' ', 10, 10);
    // Suponiendo que tienes una tabla con id 'my-table' en tu HTML
    const htmlTable = document.getElementById('my-table') as HTMLTableElement;
    if (htmlTable) {
      autoTable(doc, { html: htmlTable });
      doc.save('reporte-tickets.pdf');
    } else {
      console.error('No se encontró la tabla con el ID "my-table"');
    }
  }

  downloadExcel() {
    const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(
      this.dataSource.filteredData
    );
    const workbook: xlsx.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'reporte-tickets');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url: string = window.URL.createObjectURL(data);
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = fileName + '.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  // Generar datos de prueba para cada columna
  testData: any[] = [];
  dataPrueba() {
    for (let i = 1; i <= 100; i++) {
      const rowData: any = {};
      this.displayedColumns.forEach((column) => {
        switch (column) {
          case 'NombreCategoria':
            rowData[column] = i;
            break;
          case 'IDProducto':
            rowData[column] = i;
            break;
          case 'NombreProducto':
            rowData[column] = `Cajero ${i}`;
            break;
          case 'Cantidad':
            rowData[column] = i;
            break;

          case 'PrecioVenta':
            rowData[column] = i;
            break;
          case 'Descuento':
            rowData[column] = i;
            break;
          case 'IEPS':
            rowData[column] = i;
            break;
          case 'IVA':
            rowData[column] = i;
            break;
          case 'ISR':
            rowData[column] = i;
            break;
          case 'ImporteTotal':
            rowData[column] = i;
            break;
          case 'Costo':
            rowData[column] = i;
            break;
            case 'Importe':
            rowData[column] = i;
            break;
            case 'Ganancia':
            rowData[column] = i;
            break;

          // case 'FechaHora':
          //   rowData[column] = new Date().toLocaleString();
          //   break;
          // case 'NombreCajero':
          //   rowData[column] = `Cajero ${i}`;
          //   break;
          // case 'NombreMesero':
          //   rowData[column] = `Mesero ${i}`;
          //   break;

          // case 'ImporteTotal':
          //   rowData[column] = Number(Math.floor(Math.random() * 1000) + 1);
          //   break;
          // case 'Propina':
          //   rowData[column] = Math.floor(Math.random() * 100) + 1;
          //   break;
          // case 'PagoTotal':
          //   rowData[column] = rowData['ImporteTotal'] + rowData['Propina'];
          //   break;
          // case 'Cambios':
          //   rowData[column] = Math.floor(Math.random() * 100) + 1;
          //   break;
          // case 'NombreCliente':
          //   rowData[column] = `Cliente ${i}`;
          //   break;
          // case 'NombreRepartidor':
          //   rowData[column] = `Repartidor ${i}`;
          //   break;
          default:
            rowData[column] = '';
            break;
        }
      });
      this.testData.push(rowData);
    }
  }
}
