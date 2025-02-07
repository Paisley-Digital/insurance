import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'insurance-pie-chart',
  imports: [CommonModule],
  templateUrl: './pieChart.component.html',
  styleUrl: './pieChart.component.scss',
  standalone: true
})
export class PieChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  @Input() chartData!: { value: number; name: string }[];

  private myChart!: echarts.ECharts;

  ngAfterViewInit(): void {
    this.initChart();
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.myChart) {
      this.updateChart();
    }
  }

  private initChart(): void {
    const chartElement = this.chartContainer.nativeElement;
    this.myChart = echarts.init(chartElement);

    this.myChart.setOption({
      tooltip: { trigger: 'item' },
      legend: { top: '5%', left: 'center' },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: { show: false, position: 'center' },
          emphasis: { label: { show: true, fontSize: 20, fontWeight: 'bold' } },
          labelLine: { show: false },
          data: this.chartData
        }
      ]
    });
  }

  private updateChart(): void {
    this.myChart.setOption({
      series: [{ data: this.chartData }]
    });
  }
}
