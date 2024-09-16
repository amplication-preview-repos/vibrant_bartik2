import { SortOrder } from "../../util/SortOrder";

export type TrendAnalysisOrderByInput = {
  analyzedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  keywordId?: SortOrder;
  trendData?: SortOrder;
  updatedAt?: SortOrder;
};
