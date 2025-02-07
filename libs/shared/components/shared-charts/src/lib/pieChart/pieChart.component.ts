import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'insurance-pie-chart',
  imports: [CommonModule],
  templateUrl: './pieChart.component.html',
  styleUrl: './pieChart.component.scss',
  standalone: true
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartElement = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartElement);

    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };


    myChart.setOption(option);
  }
}

