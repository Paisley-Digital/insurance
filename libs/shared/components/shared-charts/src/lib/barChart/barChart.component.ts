import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'insurance-bar-chart',
  imports: [CommonModule],
  templateUrl: './barChart.component.html',
  styleUrl: './barChart.component.scss',
  standalone: true
})
export class BarChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  @Input() categories!: string[];
  @Input() values!: number[];

  private myChart!: echarts.ECharts;

  ngAfterViewInit(): void {
    this.initChart();
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['categories'] || changes['values']) && this.myChart) {
      this.updateChart();
    }
  }

  private initChart(): void {
    const chartElement = this.chartContainer.nativeElement;
    this.myChart = echarts.init(chartElement);

    this.myChart.setOption({
      xAxis: { type: 'category', data: this.categories },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: this.values }]
    });

    window.addEventListener('resize', () => this.myChart.resize());
  }

  private updateChart(): void {
    this.myChart.setOption({
      xAxis: { data: this.categories },
      series: [{ data: this.values }]
    });
  }
}
