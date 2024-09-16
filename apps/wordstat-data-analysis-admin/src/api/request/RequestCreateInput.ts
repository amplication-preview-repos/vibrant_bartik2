import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { SearchResultCreateNestedManyWithoutRequestsInput } from "./SearchResultCreateNestedManyWithoutRequestsInput";

export type RequestCreateInput = {
  keyword?: KeywordWhereUniqueInput | null;
  requestedAt?: Date | null;
  searchResults?: SearchResultCreateNestedManyWithoutRequestsInput;
};
