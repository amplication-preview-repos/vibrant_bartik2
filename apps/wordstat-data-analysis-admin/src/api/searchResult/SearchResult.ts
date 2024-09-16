import { Request } from "../request/Request";
import { JsonValue } from "type-fest";

export type SearchResult = {
  createdAt: Date;
  id: string;
  request?: Request | null;
  resultData: JsonValue;
  updatedAt: Date;
};
