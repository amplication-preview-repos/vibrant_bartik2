import { RequestCreateNestedManyWithoutKeywordsInput } from "./RequestCreateNestedManyWithoutKeywordsInput";
import { TrendAnalysisCreateNestedManyWithoutKeywordsInput } from "./TrendAnalysisCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  keyword?: string | null;
  requests?: RequestCreateNestedManyWithoutKeywordsInput;
  trendAnalyses?: TrendAnalysisCreateNestedManyWithoutKeywordsInput;
};
