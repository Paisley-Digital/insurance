import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { employeeDataDashboardMock } from '@insurance-employee-data-dashboards';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'insurance-dashboard',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatCardContent,
    MatDivider,
    NgxEchartsDirective,
  ],
  templateUrl: './employee-feature-dashboard.component.html',
  styleUrl: './employee-feature-dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly dashboardMock = employeeDataDashboardMock;

  chartTheme = 'default';

  option = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  optionTwo = {
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [89.7, 20145, 'Fraud Detected'],
        [68.1, 79146, 'Incomplete Update'],
        [19.6, 91852, 'Mismatch Data'],
        [10.6, 101852, 'Expired '],
        [32.7, 20112, 'Blurry Image'],
      ],
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    series: [
      {
        type: 'bar',
        encode: {
          x: 'amount',
          y: 'product',
        },
      },
    ],
  };

  optionThree = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 300, name: 'Compliant' },
          { value: 580, name: 'Expiring Documents' },
          { value: 484, name: 'Non-Compliant' },
        ],
      },
    ],
  };
}
