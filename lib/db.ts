import Dexie, { type Table } from 'dexie';
import type { PortfolioProject, TelemetryMetric } from './types';
class PortfolioCache extends Dexie {
  projects!: Table<PortfolioProject, string>;
  metrics!: Table<TelemetryMetric, string>;
  constructor() { super('adithya-portfolio-cache'); this.version(1).stores({projects:'id, sort_order, featured',metrics:'id'}); }
}
export const portfolioDb = typeof window !== 'undefined' ? new PortfolioCache() : null;
