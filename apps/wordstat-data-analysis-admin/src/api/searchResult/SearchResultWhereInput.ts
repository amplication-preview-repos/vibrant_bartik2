import { StringFilter } from "../../util/StringFilter";
import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type SearchResultWhereInput = {
  id?: StringFilter;
  request?: RequestWhereUniqueInput;
  resultData?: JsonFilter;
};
