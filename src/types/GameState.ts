export enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
  Lizard = "lizard",
  Spock = "spock",
}

export enum Result {
  Win = "You Win",
  Lose = "You Lose",
  Tie = "Tie",
}


export interface GameState {
  displayRulesModal: boolean;
  playerChoice: Choice | undefined;
  computerChoice: Choice | undefined;
  result: Result | undefined;
  score: 0;
  winsAgainst: {
    rock: Choice[];
    paper: Choice[];
    scissors: Choice[];
    lizard: Choice[];
    spock: Choice[];
};
started: boolean;
}


