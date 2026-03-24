import { BYE_SENTINEL, gamesForPlayer } from './utilities.js';

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

function gamesWon(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === BYE_SENTINEL || g.white === BYE_SENTINEL) {
      continue;
    }
    const playerResult = g.white === player ? g.result : 1 - g.result;
    if (playerResult === 1) {
      count += 1;
    }
  }
  return count;
}

function gamesPlayedWithBlack(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === BYE_SENTINEL || g.white === BYE_SENTINEL) {
      continue;
    }
    if (g.black === player) {
      count += 1;
    }
  }
  return count;
}

function gamesWonWithBlack(player: string, games: Game[][]): number {
  let count = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === BYE_SENTINEL || g.white === BYE_SENTINEL) {
      continue;
    }
    // black wins when result (from white's perspective) = 0
    if (g.black === player && g.result === 0) {
      count += 1;
    }
  }
  return count;
}

function roundsElectedToPlay(player: string, games: Game[][]): number {
  const playerGames = gamesForPlayer(player, games);
  const byeGames = playerGames.filter(
    (g) => g.black === BYE_SENTINEL || g.white === BYE_SENTINEL,
  );
  return playerGames.length - byeGames.length;
}

function standardPoints(player: string, games: Game[][]): number {
  let total = 0;
  for (const g of gamesForPlayer(player, games)) {
    if (g.black === BYE_SENTINEL || g.white === BYE_SENTINEL) {
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

export {
  gamesPlayedWithBlack,
  gamesWon,
  gamesWonWithBlack,
  numberOfWins,
  roundsElectedToPlay,
  standardPoints,
};
