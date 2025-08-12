import * as echarts from 'echarts';

export const KYC = {
  TITLE: 'KYC Data Completeness Overview',
  COLORS: {
    PRIMARY: '#287A6E',
    RING_BG: '#E6F0EE',
    TEXT: '#27312F',
    WARN: '#F5C14D',
  },
  SIZES: {
    DONUT: { w: 140, h: 140 },
    SPARK: { w: 180, h: 52 },
  },
  SPARKLINE_DEFAULT: [6, 9, 5, 8, 7, 9, 6],
} as const;

export function buildKycDonutOption(percent: number): echarts.EChartsOption {
  const p = Math.max(0, Math.min(100, Math.round(percent)));
  return {
    animation: true,
    series: [
      {
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        silent: true,
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: p, itemStyle: { color: KYC.COLORS.PRIMARY } },
          { value: 100 - p, itemStyle: { color: KYC.COLORS.RING_BG } },
        ],
      },
    ],
    graphic: {
      type: 'text',
      left: 'center',
      top: 'middle',
      style: {
        text: `${p}%`,
        fontSize: 24,
        fontWeight: 700,
        fill: KYC.COLORS.TEXT,
        fontFamily: 'Inter, system-ui, sans-serif',
      },
    },
    tooltip: { show: false },
  };
}

export function buildSparklineOption(data: number[]): echarts.EChartsOption {
  return {
    grid: { left: 0, right: 0, top: 10, bottom: 0 },
    xAxis: { type: 'category', show: false, data: data.map((_, i) => i) },
    yAxis: { type: 'value', show: false },
    series: [
      {
        type: 'line',
        data,
        symbol: 'none',
        smooth: true,
        lineStyle: { width: 2 },
        areaStyle: { opacity: 0.15 },
      },
    ],
    tooltip: { show: false },
  };
}

export const fmtInt = (n: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);
