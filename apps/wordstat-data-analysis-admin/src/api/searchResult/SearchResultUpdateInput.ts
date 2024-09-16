import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SearchResultUpdateInput = {
  request?: RequestWhereUniqueInput | null;
  resultData?: InputJsonValue;
};
