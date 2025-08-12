import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { employeeDataDashboardMock } from '@insurance-employee-data-dashboards';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';

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
export class DashboardComponent implements OnInit {
  protected readonly dashboardMock = employeeDataDashboardMock;
  percentCompleted = 92;
  sparkline = [6, 9, 5, 8, 7, 9, 6];

  policyActive = 21205;
  policyExpiring = 8900;

  policyOption: any;

  ngOnInit() {
    this.buildPolicyOption();
  }

  tatAvg = 2.4;
  policiesProcessed = 6320;

  tatLineOption = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'line' } },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: '#D7DBE0' } },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#EEF1F4' } },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { width: 3, color: '#D9B123' },
        itemStyle: { color: '#D9B123' },
        areaStyle: { color: 'rgba(217,177,35,0.15)' },
        data: [20, 60, 35, 180, 120, 150, 200],
      },
    ],
  };

  riskOption = {
    grid: { left: 48, right: 24, top: 30, bottom: 36 },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: {
      type: 'category',
      data: ['High Risk', 'PEPs Detected', 'Ending Screening'],
      axisLine: { lineStyle: { color: '#D7DBE0' } },
      axisTick: { show: false },
      axisLabel: { color: '#6B7280' },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#EEF1F4' } },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#6B7280' },
    },
    series: [
      {
        type: 'bar',
        barWidth: 120,
        data: [
          {
            value: 420,
            itemStyle: {
              color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#E17676' },
                { offset: 1, color: '#9F2A2A' },
              ]),
              borderRadius: [10, 10, 0, 0],
            },
          },
          {
            value: 85,
            itemStyle: {
              color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#E7A1A1' },
                { offset: 1, color: '#B44A4A' },
              ]),
              borderRadius: [10, 10, 0, 0],
            },
          },
          {
            value: 1245,
            itemStyle: {
              color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#F0A6A6' },
                { offset: 1, color: '#C14C4C' },
              ]),
              borderRadius: [10, 10, 0, 0],
            },
          },
        ],
        label: { show: false },
      },
    ],
  };

  kycDonutOption = {
    series: [
      {
        type: 'pie',
        radius: ['50%', '84%'],
        startAngle: 90,
        silent: true,
        label: { show: false },
        labelLine: { show: false },
        data: [
          {
            value: this.percentCompleted,
            itemStyle: {
              color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#328868' },
                { offset: 1, color: '#C2C2C2' },
              ]),
            },
          },
        ],
      },
    ],
    graphic: {
      type: 'text',
      left: 'center',
      top: 'middle',
      style: {
        text: `${this.percentCompleted}%`,
        fontSize: 24,
        fontWeight: 700,
        fill: '#27312F',
        fontFamily: 'Inter, system-ui, sans-serif',
      },
    },
    tooltip: { show: false },
  };

  kycSparkOption = {
    grid: { left: 0, right: 0, top: 10, bottom: 0 },
    xAxis: {
      type: 'category',
      show: false,
      data: this.sparkline.map((_, i) => i),
    },
    yAxis: { type: 'value', show: false },
    series: [
      {
        type: 'line',
        data: this.sparkline,
        symbol: 'none',
        smooth: true,
        lineStyle: { width: 2, color: '#C6C9CD' },
        areaStyle: { color: '#C6C9CD', opacity: 0.15 },
      },
    ],
    tooltip: { show: false },
  };

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
    xAxis: { name: '' },
    yAxis: { type: 'category' },
    series: [
      {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 1, color: '#E17676' },
          { offset: 0.5, color: '#9F2A2A' },
        ]),
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

  private buildPolicyOption() {
    const a1 = Math.round(this.policyActive * 0.34);
    const a2 = Math.round(this.policyActive * 0.33);

    this.policyOption = {
      tooltip: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['10%', '85%'],
          startAngle: 220,
          clockwise: true,
          padAngle: 2,
          itemStyle: { borderRadius: 12, borderColor: '#fff', borderWidth: 6 },
          label: { show: false },
          labelLine: { show: false },
          data: [
            {
              value: a1,
              name: 'Active',
              itemStyle: {
                color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#7BC095' },
                  { offset: 1, color: '#4B9D7F' },
                ]),
              },
            },
            {
              value: a2,
              name: 'Active',
              itemStyle: {
                color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#66B389' },
                  { offset: 1, color: '#3C8F76' },
                ]),
              },
            },
            {
              value: this.policyExpiring,
              name: 'Expiring',
              itemStyle: {
                color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#F2B07A' },
                  { offset: 1, color: '#E38C55' },
                ]),
              },
            },
          ],
        },
      ],
    };
  }
}
