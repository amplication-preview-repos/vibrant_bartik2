import { Request } from "../request/Request";
import { TrendAnalysis } from "../trendAnalysis/TrendAnalysis";

export type Keyword = {
  createdAt: Date;
  id: string;
  keyword: string | null;
  requests?: Array<Request>;
  trendAnalyses?: Array<TrendAnalysis>;
  updatedAt: Date;
};
