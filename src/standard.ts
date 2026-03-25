import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function standardPoints(player: string, games: Game[][]): number {
  let total = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === g.white) {
      continue;
    }
    const playerResult = g.white === player ? g.result : 1 - g.result;
    const opponentResult = 1 - playerResult;
    if (playerResult > opponentResult) {
      total += 1;
    } else if (playerResult === opponentResult) {
      total += 0.5;
    }
  }
  return total;
}

export { standardPoints, standardPoints as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
