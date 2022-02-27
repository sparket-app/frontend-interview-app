import { Entry } from "./entry";

export interface PoolDetailsResponse {
  id: string;
  created: number;
  updated: number;
  name: string;
  status: number;
  rules: string;
  win_condition: string;
  total: number;
  start: number;
  close: number;
  winner_contestant_id: string;
  winner_name: string;
  entries: Entry[];
  fee: number;
  event_name: string;
  group_id?: string;
}
