import { LeaderboardEntry } from "./leaderboard-entry";

export interface LeaderboardResponse {
  user_list: LeaderboardEntry[];
  user_entry: LeaderboardEntry;
  total_contestants: number;
}
