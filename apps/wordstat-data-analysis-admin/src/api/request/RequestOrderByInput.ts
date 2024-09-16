import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keywordId?: SortOrder;
  requestedAt?: SortOrder;
  updatedAt?: SortOrder;
};
