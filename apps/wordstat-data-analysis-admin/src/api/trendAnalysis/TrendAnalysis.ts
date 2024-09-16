import { Keyword } from "../keyword/Keyword";
import { JsonValue } from "type-fest";

export type TrendAnalysis = {
  analyzedAt: Date | null;
  createdAt: Date;
  id: string;
  keyword?: Keyword | null;
  trendData: JsonValue;
  updatedAt: Date;
};
