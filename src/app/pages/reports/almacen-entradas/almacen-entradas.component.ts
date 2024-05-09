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
  selector: 'app-almacen-entradas',
  templateUrl: './almacen-entradas.component.html',
  styleUrl: './almacen-entradas.component.css'
})
export class AlmacenEntradasComponent {

  verde: string = 'var(--verde)';

  displayedColumns: any[] = [
    'IDEntrada',
    'Fecha',
    'Descripcion',
    'NombreProveedor',
    'Referencia',
    'ImporteTotal',
    'OrdenCompra',
    'Pedido',
    'MinimoRequerido',
    'MaximoPermitido',

  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Obtenemos la tabla, para poder usarla y descargar en PDF y Excel
  @ViewChild(MatTable) table!: MatTable<any>;
rowData: any;

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
  isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  // Generar datos de prueba para cada columna
  testData: any[] = [];
  dataPrueba() {
    for (let i = 1; i <= 100; i++) {
      const rowData: any = {};
      this.displayedColumns.forEach((column) => {
        switch (column) {
          // case 'FechaHora':
          //   rowData[column] = new Date().toLocaleString();
          //   break;
          case 'IDEntrada':
            rowData[column] = `ID  ${i}`;
            break;
          case 'Fecha':
            rowData[column] = new Date().toLocaleString();
            break;
          case 'Descripcion':
            rowData[column] = `Descripcion ${i}`;
            break;
          case 'NombreProveedor':
            rowData[column] = `NombreProveedor ${i}`;
            break;
          case 'Referencia':
            rowData[column] = i;
            break;
            case 'ImporteTotal':
            rowData[column] = i;
            break;
          case 'OrdenCompra':
            rowData[column] = `OrdenCompra ${i}`;
            break;
          case 'Pedido':
            rowData[column] = `Pedido ${i}`;
            break;
          case 'MinimoRequerido':
            rowData[column] = `MinimoRequerido ${i}`;
            break;
          case 'MaximoPermitido':
            rowData[column] = `MaximoPermitido ${i}`;
            break;

          default:
            rowData[column] = '';
            break;
        }
      });
      this.testData.push(rowData);
    }

  }
}
