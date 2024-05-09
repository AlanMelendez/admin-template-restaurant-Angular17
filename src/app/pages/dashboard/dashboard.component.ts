import { Component, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';
const salesData = [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: false,
  encapsulation: ViewEncapsulation.None // Permite que los estilos de ANGULAR MATERIAL se apliquen correctamente DESDE NUESTRO CSS

})
export class DashboardComponent {
  chart: any;
  barChart: any;
  lineChart: any;
  doughnutChart: any;
  cuentasAbiertas:any;
  ventasPorHora:any;
  top10Products:any;
  metodosDePago:any;
  ventasCategoria:any;
  ventasPorMesero: any;


  ngOnInit(): void {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1.00)',
            'rgba(54, 162, 235, 1.00)',
            'rgba(255, 206, 86, 1.00)',
            'rgba(75, 192, 192, 1.00)',
            'rgba(153, 102, 255, 1.00)',
            'rgba(255, 159, 64, 1.00)'
          ],
          // borderColor: [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 1,
          hoverOffset: 4
        }]
      },

      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom', // Coloca la leyenda a la derecha
            labels: {
              font: {
                  size: this.fontSize// Tamaño de la fuente de la leyenda
              }

            }
          }
        }
      }
    });

    this.chart = new Chart("cuentasAbiertas", {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.ventasPorHora = new Chart('ventasPorHora', {
      type: 'bar',
      data: {
        labels: [
          '8 AM', '9 AM', '10 AM', '11 AM',
          '12 PM', '1 PM', '2 PM', '3 PM',
          '4 PM', '5 PM', '6 PM', '7 PM',
          '8 PM', '9 PM', '10 PM', '11 PM' // Etiquetas para las horas del rango
        ],
        //labels: Array.from({ length: 14 }, (_, i) => `${i + 1} AM`), // Etiquetas para las horas del día
        datasets: [{
          label: 'Ventas por hora',
          data: [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65,90,25,70,45], // Tus datos de ventas por hora
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de las barras
          borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Empezar el eje y en 0
          }
        }
      }
    });

    const labels = ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E', 'Producto F', 'Producto G', 'Producto H', 'Producto I', 'Producto J'];
    const data = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    this.top10Products = new Chart('top10Products', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad vendida',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Organizar los datos a lo largo del eje y

        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)', // Color de las etiquetas del eje x
              font: {
                size: 14 // Tamaño de fuente de las etiquetas del eje x
              }
            }
          },
          y: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)', // Color de las etiquetas del eje y
              font: {
                size: 14 // Tamaño de fuente de las etiquetas del eje y
              }
            }
          }
        },
        plugins: {
          legend: {

          }
        }
      }
    });

    const labelsmetodosDePago = ['Efectivo', 'Tarjeta de crédito', 'Transferencia bancaria', 'PayPal'];
    const datametodosDePago = [300, 500, 200, 100];
    const maxLabel = 'Tarjeta de crédito'; // Obtén el label más alto

    this.metodosDePago = new Chart('metodosDePago', {
      type: 'doughnut',
      data: {
        labels: labelsmetodosDePago,
        datasets: [{
          data: datametodosDePago,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },

          title: {
            display: true,
            text: maxLabel,
            position: 'bottom'
          }
        },

      }
    });


    this.ventasCategoria = new Chart("ventasCategoria", {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.ventasPorMesero = new Chart("ventasPorMesero", {
      type: "bar",
      data: {
        labels: ["Mesero A", "Mesero B", "Mesero C", "Mesero D", "Mesero E"],
        datasets: [
          {
            label: "Ventas por Mesero",
            data: [1200, 1500, 1000, 1800, 900],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Ventas'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Meseros'
            }
          }
        }
      }
    });


/**
    this.chart = new Chart('porDia', {
      type: 'bar', // Tipo de gráfico (puede ser 'bar', 'line', 'pie', etc.)
      data: {
        labels: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'], // Etiquetas en el eje x
        datasets: [{
          label: 'Nombre del conjunto de datos',
          data: [10, 20, 30], // Datos del gráfico
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // Aquí puedes personalizar las opciones del gráfico, como el título, escalas, leyendas, etc.
      }
    });

    // Configuración del gráfico de barras
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {

          // y: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    });

    // Configuración del gráfico de líneas
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
 */

    // Configuración del gráfico de torta

  }

  toggleCollapse(cardId: string) {
    const card = document.getElementById(cardId);
    if (card) {
      card.classList.toggle('collapsed');
    }
  }

   calculateFontSize(): number {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      return 14; // Tamaño de fuente para pantallas pequeñas
    } else if (windowWidth < 1024) {
      return 14; // Tamaño de fuente para pantallas medianas
    } else {
      return 36; // Tamaño de fuente para pantallas grandes
    }
  }

  // Obtener el tamaño de fuente calculado
   fontSize:number = this.calculateFontSize();
}

