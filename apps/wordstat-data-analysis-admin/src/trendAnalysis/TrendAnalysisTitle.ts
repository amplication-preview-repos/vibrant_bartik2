import { TrendAnalysis as TTrendAnalysis } from "../api/trendAnalysis/TrendAnalysis";

export const TRENDANALYSIS_TITLE_FIELD = "id";

export const TrendAnalysisTitle = (record: TTrendAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
