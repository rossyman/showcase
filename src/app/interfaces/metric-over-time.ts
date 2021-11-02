export type MetricOverTime<T> = Omit<T, 'delta'> & {
  period: string;
};
