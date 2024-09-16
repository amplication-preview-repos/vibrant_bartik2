import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SearchResultListRelationFilter } from "../searchResult/SearchResultListRelationFilter";

export type RequestWhereInput = {
  id?: StringFilter;
  keyword?: KeywordWhereUniqueInput;
  requestedAt?: DateTimeNullableFilter;
  searchResults?: SearchResultListRelationFilter;
};
