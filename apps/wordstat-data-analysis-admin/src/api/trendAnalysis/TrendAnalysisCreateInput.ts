import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TrendAnalysisCreateInput = {
  analyzedAt?: Date | null;
  keyword?: KeywordWhereUniqueInput | null;
  trendData?: InputJsonValue;
};
