import { BYE_SENTINEL, gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function numberOfWins(playerId: string, games: Game[]): number {
  let count = 0;
  for (const g of gamesForPlayer(playerId, games)) {
    const playerResult = g.whiteId === playerId ? g.result : 1 - g.result;
    if (playerResult === 1) {
      count += 1;
    }
  }
  return count;
}

function gamesWon(playerId: string, games: Game[]): number {
  let count = 0;
  for (const g of gamesForPlayer(playerId, games)) {
    if (g.blackId === BYE_SENTINEL || g.whiteId === BYE_SENTINEL) {
      continue;
    }
    const playerResult = g.whiteId === playerId ? g.result : 1 - g.result;
    if (playerResult === 1) {
      count += 1;
    }
  }
  return count;
}

function gamesPlayedWithBlack(playerId: string, games: Game[]): number {
  let count = 0;
  for (const g of gamesForPlayer(playerId, games)) {
    if (g.blackId === BYE_SENTINEL || g.whiteId === BYE_SENTINEL) {
      continue;
    }
    if (g.blackId === playerId) {
      count += 1;
    }
  }
  return count;
}

function gamesWonWithBlack(playerId: string, games: Game[]): number {
  let count = 0;
  for (const g of gamesForPlayer(playerId, games)) {
    if (g.blackId === BYE_SENTINEL || g.whiteId === BYE_SENTINEL) {
      continue;
    }
    // black wins when result (from white's perspective) = 0
    if (g.blackId === playerId && g.result === 0) {
      count += 1;
    }
  }
  return count;
}

function roundsElectedToPlay(playerId: string, games: Game[]): number {
  const playerGames = gamesForPlayer(playerId, games);
  const byeGames = playerGames.filter(
    (g) => g.blackId === BYE_SENTINEL || g.whiteId === BYE_SENTINEL,
  );
  return playerGames.length - byeGames.length;
}

function standardPoints(playerId: string, games: Game[]): number {
  let total = 0;
  for (const g of gamesForPlayer(playerId, games)) {
    if (g.blackId === BYE_SENTINEL || g.whiteId === BYE_SENTINEL) {
      continue;
    }
    const playerResult = g.whiteId === playerId ? g.result : 1 - g.result;
    const opponentResult = 1 - playerResult;
    if (playerResult > opponentResult) {
      total += 1;
    } else if (playerResult === opponentResult) {
      total += 0.5;
    }
  }
  return total;
}

export {
  gamesPlayedWithBlack,
  gamesWon,
  gamesWonWithBlack,
  numberOfWins,
  roundsElectedToPlay,
  standardPoints,
};

export type { Game, Player, Result } from './types.js';
