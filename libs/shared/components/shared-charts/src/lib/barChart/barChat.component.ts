import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'insurance-bar-chart',
  imports: [CommonModule],
  templateUrl: './barChat.component.html',
  styleUrl: './barChat.component.scss',
  standalone: true
})
export class BarChartComponent implements AfterViewInit {

  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const chartElement = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartElement);

    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    myChart.setOption(option);

    // Resize the chart when the window resizes
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }
}
