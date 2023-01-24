import { Choice } from "types/GameState";

export function generateComputerMove() {
  const choices = Object.values(Choice);

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
