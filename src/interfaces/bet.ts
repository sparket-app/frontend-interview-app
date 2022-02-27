export interface Bet {
  id: string;
  created: number;
  updated: number;
  status: number;
  contestant_id: string;
  contestant_name: string;
  amount: number;
  odds: number;
  payout: number;
  pool_id: string;
  pool_name: string;
  pool_status: number;
  pool_winner: string;
  pool_close: number;
  event_name: string;
}
