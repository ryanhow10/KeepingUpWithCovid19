import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() labels:string[];
  @Input() data:number[];
  @Input() title:string;
  @Input() country:string;

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              data: this.data,
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          hover: true,
          title: {
            display: true,
            text: this.country + " " + this.title
          },
          legend: {
            display: false
          }
      }
    });
  }

}
