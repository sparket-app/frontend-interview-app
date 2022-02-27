export interface Pool {
  id: string;
  created: number;
  updated: number;
  name: string;
  status: number;
  bet_type: number;
  total: number;
  weight: number;
  start: number;
  close: number;
  event_name?: string;
}
