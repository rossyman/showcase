import { MetricOverTime } from '../../../interfaces/metric-over-time';
import { PatientInsight } from '../../../interfaces/patient-insight';
import { EChartsOption } from 'echarts';

export const createPatientBloodCountInsightOverTimeGraph = (insights: MetricOverTime<PatientInsight>[]): EChartsOption => {

  const categories = insights.map(insight => insight.period);
  const dataPoints = insights.map(insight => Number(insight.insightValue.split(' ')[0]));

  return {
    grid: {
      left: 40,
      top: 20,
      right: 0,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: {
        show: false
      },
      axisTick: {
        alignWithLabel: true,
        show: false
      }
    },
    yAxis: {
      type: 'value',
      min: Math.min(...dataPoints),
      max: Math.max(...dataPoints)
    },
    series: [
      {
        data: dataPoints,
        smooth: true,
        type: 'line',
        color: '#8e94f2'
      },
    ],
  };
}
