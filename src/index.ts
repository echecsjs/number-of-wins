import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function numberOfWins(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    const playerResult = g.white === player ? g.result : 1 - g.result;
    if (playerResult === 1) {
      count += 1;
    }
  }
  return count;
}

export { numberOfWins as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
