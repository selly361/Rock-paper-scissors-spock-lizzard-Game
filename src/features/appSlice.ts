import { Choice, GameState, Result } from "types/GameState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { generateComputerMove } from "utils/generateComputerMove";

const initialState: GameState = {
  started: false,
  displayRulesModal: false,
  playerChoice: undefined,
  computerChoice: undefined,
  result: undefined,
  score: 0,
  winsAgainst: {
    rock: [Choice.Scissors, Choice.Lizard],
    paper: [Choice.Rock, Choice.Spock],
    scissors: [Choice.Paper, Choice.Lizard],
    lizard: [Choice.Paper, Choice.Spock],
    spock: [Choice.Rock, Choice.Scissors],
  },
};

const appSlice = createSlice({
  name: "app",

  initialState,

  reducers: {
    playerMove: (state, action: PayloadAction<Choice>) => {
      state.playerChoice = action.payload;
      state.started = true;
    },

    computerMove: (state, action) => {
      if (state.playerChoice) {
        state.computerChoice = generateComputerMove();

        if (
          state.winsAgainst[state.playerChoice].includes(state.computerChoice)
        ) {
          state.score++;
          state.result = Result.Win;
        } else if (
          state.winsAgainst[state.computerChoice].includes(state.playerChoice)
        ) {
          state.score--;
          state.result = Result.Lose;
        } else {
          state.result = Result.Tie;
        }
      }
    },

    showRulesModal: (state) => {
      state.displayRulesModal = true;
    },

    closeRulesModal: (state) => {
      state.displayRulesModal = false;
    },

    restartGame: (state) => {
      state.result = undefined;
      state.playerChoice = undefined;
      state.computerChoice = undefined;
      state.started = false;

    },
  },
});

export default appSlice.reducer;
export const {
  playerMove,
  restartGame,
  showRulesModal,
  closeRulesModal,
  computerMove,
} = appSlice.actions;
