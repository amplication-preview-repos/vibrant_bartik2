import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { TrendAnalysisListRelationFilter } from "../trendAnalysis/TrendAnalysisListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
  requests?: RequestListRelationFilter;
  trendAnalyses?: TrendAnalysisListRelationFilter;
};
