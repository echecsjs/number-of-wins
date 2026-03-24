import { BYE_SENTINEL, gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function roundsElectedToPlay(player: string, games: Game[][]): number {
  const playerGames = gamesForPlayer(player, games);
  const byeGames = playerGames.filter(
    (g) => g.black === BYE_SENTINEL || g.white === BYE_SENTINEL,
  );
  return playerGames.length - byeGames.length;
}

export { roundsElectedToPlay, roundsElectedToPlay as tiebreak };

export { type GameKind, type Player, type Result, type Game } from './types.js';
