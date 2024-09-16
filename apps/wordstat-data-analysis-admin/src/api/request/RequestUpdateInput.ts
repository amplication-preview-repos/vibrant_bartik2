import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { SearchResultUpdateManyWithoutRequestsInput } from "./SearchResultUpdateManyWithoutRequestsInput";

export type RequestUpdateInput = {
  keyword?: KeywordWhereUniqueInput | null;
  requestedAt?: Date | null;
  searchResults?: SearchResultUpdateManyWithoutRequestsInput;
};
