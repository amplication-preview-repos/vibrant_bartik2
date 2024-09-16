import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SearchResultCreateInput = {
  request?: RequestWhereUniqueInput | null;
  resultData?: InputJsonValue;
};
