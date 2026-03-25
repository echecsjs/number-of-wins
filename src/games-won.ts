import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function gamesWon(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === g.white) {
      continue;
    }
    const playerResult = g.white === player ? g.result : 1 - g.result;
    if (playerResult === 1) {
      count += 1;
    }
  }
  return count;
}

export { gamesWon, gamesWon as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
