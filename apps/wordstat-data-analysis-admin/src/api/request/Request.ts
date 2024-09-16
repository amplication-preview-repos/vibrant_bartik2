import { Keyword } from "../keyword/Keyword";
import { SearchResult } from "../searchResult/SearchResult";

export type Request = {
  createdAt: Date;
  id: string;
  keyword?: Keyword | null;
  requestedAt: Date | null;
  searchResults?: Array<SearchResult>;
  updatedAt: Date;
};
