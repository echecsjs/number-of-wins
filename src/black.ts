import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function gamesPlayedWithBlack(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === g.white) {
      continue;
    }
    if (g.black === player) {
      count += 1;
    }
  }
  return count;
}

export { gamesPlayedWithBlack, gamesPlayedWithBlack as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
