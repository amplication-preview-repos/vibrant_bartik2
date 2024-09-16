import { RequestUpdateManyWithoutKeywordsInput } from "./RequestUpdateManyWithoutKeywordsInput";
import { TrendAnalysisUpdateManyWithoutKeywordsInput } from "./TrendAnalysisUpdateManyWithoutKeywordsInput";

export type KeywordUpdateInput = {
  keyword?: string | null;
  requests?: RequestUpdateManyWithoutKeywordsInput;
  trendAnalyses?: TrendAnalysisUpdateManyWithoutKeywordsInput;
};
