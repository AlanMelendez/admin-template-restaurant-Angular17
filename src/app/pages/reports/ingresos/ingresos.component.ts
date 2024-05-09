import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as xlsx from 'xlsx';

export interface TicktData {
  ID: number;
  fechaHora: string;
  IngresoDe: string;
  FechaReferencia: string;
  NombreCajero: number;
  FormaPago: number;
  Referencia: number;
  ImporteTotal: number;
  cambios: number;
  nombreCliente: string;
  nombreRepartidor: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css',
})
export class IngresosComponent {
  verde: string = 'var(--verde)';

  displayedColumns: any[] = [
    'ID',
    'FechaHora',
    'IngresoDe',
    'FechaReferencia',
    'NombreCliente',
    'NombreCajero',
    'FormaPago',
    'Referencia',
    'ImporteTotal',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private MatPaginatorIntl: MatPaginatorIntl) {
    this.MatPaginatorIntl.itemsPerPageLabel = 'Registros por página';
    this.MatPaginatorIntl.nextPageLabel = 'Siguiente';
    this.MatPaginatorIntl.previousPageLabel = 'Anterior';
    this.dataPrueba();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.testData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getTotalCost(columna: any) {

    //Si existen elementos filtrados:
    if(this.dataSource.filteredData.length > 0){
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

  applyFilter(filterValue: any) {

    this.dataSource.filter = filterValue.value.trim().toLowerCase();
    console.log(this.dataSource.filteredData);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      console.log(this.dataSource.filteredData);
    }
  }

  downloadPDF() {

    const doc = new jsPDF('landscape'); // Establece la orientación a landscape
    doc.text(' ', 10, 10);
    // Suponiendo que tienes una tabla con id 'my-table' en tu HTML
    const htmlTable = document.getElementById('my-table') as HTMLTableElement;
    if (htmlTable) {
      autoTable(doc, { html: htmlTable });
      doc.save('reporte-ingresos.pdf');
    } else {
      console.error('No se encontró la tabla con el ID "my-table"');
    }

  }

  downloadExcel() {
    const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(this.dataSource.filteredData);
    const workbook: xlsx.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'reporte-ingresos');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/octet-stream'});
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
          case 'ID':
            rowData[column] = i;
            break;
          case 'FechaHora':
            rowData[column] = new Date().toLocaleString();
            break;
          case 'IngresoDe':
            rowData[column] = Math.floor(Math.random() * 100) + 1;
            break;
          case 'FechaReferencia':
            rowData[column] = `Referencia ${i}`;
            break;
          case 'NombreCajero':
            rowData[column] = `Cajero  ${i}`;
            break;
          case 'FormaPago':
            rowData[column] = `Transferencia ${i}`;
            break;
          case 'Referencia':
            rowData[column] = Math.floor(Math.random() * 100) + 1;
            break;
          case 'ImporteTotal':
            rowData[column] = rowData['IngresoDe'] + rowData['Referencia'];
            break;
          case 'Cambios':
            rowData[column] = Math.floor(Math.random() * 100) + 1;
            break;
          case 'NombreCliente':
            rowData[column] = `Cliente ${i}`;
            break;
          case 'NombreRepartidor':
            rowData[column] = `Repartidor ${i}`;
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
