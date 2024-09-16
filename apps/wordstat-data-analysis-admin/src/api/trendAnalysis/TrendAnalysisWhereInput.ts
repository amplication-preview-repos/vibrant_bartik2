import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TrendAnalysisWhereInput = {
  analyzedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  keyword?: KeywordWhereUniqueInput;
  trendData?: JsonFilter;
};
