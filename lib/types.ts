export type PortfolioProject = {
  id: string; title: string; category: string; description: string; stack: string[];
  href: string | null; featured: boolean; sort_order: number; updated_at?: string;
};
export type TelemetryMetric = { id: string; label: string; value: number; suffix: string; detail: string; updated_at?: string };
