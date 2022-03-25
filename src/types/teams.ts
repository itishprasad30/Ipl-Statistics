export type Teams = {
  team1: string;
}

export type Players =  {
  Player_Name: string;
  DOB: string;
  Batting_Hand: string;
  Bowling_Skill: string;
  Country: string;
}
export type PlayersData =  {
  Player_Name: string;
  DOB: string;
  Batting_Hand: string;
  Bowling_Skill: string;
  Country: string;
}



export type Indivisuals = {
  batsman: string;
  total_runs: number;
  out: number;
  numberofballs: number;
  average: number | string;
  strikerate: number;
}


export type TeamsData = {
  team: string;
  home_wins: number;
  away_wins: number;
  home_matches: number;
  away_matches: number;
  home_win_percentage: number;
  away_win_percentage: number;
}
