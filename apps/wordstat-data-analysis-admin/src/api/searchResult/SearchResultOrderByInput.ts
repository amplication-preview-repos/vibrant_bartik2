import { SortOrder } from "../../util/SortOrder";

export type SearchResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  requestId?: SortOrder;
  resultData?: SortOrder;
  updatedAt?: SortOrder;
};
