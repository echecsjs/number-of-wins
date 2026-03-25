import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function gamesWonWithBlack(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === g.white) {
      continue;
    }
    // black wins when result (from white's perspective) = 0
    if (g.black === player && g.result === 0) {
      count += 1;
    }
  }
  return count;
}

export { gamesWonWithBlack, gamesWonWithBlack as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
