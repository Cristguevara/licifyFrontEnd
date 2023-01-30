import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  xAxis:string[]=[
    "Korea del sur",
    "Canada",
    "Reino unido",
    "Países bajos",
    "Italia",
    "Francia",
    "Japón",
    "Estados unidos",
    "China",
    "Alemania"
  ]

  yAxis:number[]=[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: this.yAxis
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
          },
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.xAxis
      }
    };
  }

  btn01:boolean=true
  initBtn:boolean=false

  ngOnInit(): void {
  }

  changeBtn01(){
    this.btn01=!this.btn01
    this.initBtn=true
  }

}
