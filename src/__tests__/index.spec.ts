import { describe, expect, it } from 'vitest';

import {
  gamesPlayedWithBlack,
  gamesWon,
  gamesWonWithBlack,
  numberOfWins,
  roundsElectedToPlay,
  standardPoints,
} from '../functions.js';

import type { Game } from '../types.js';

// 4 players, 3 rounds:
// Round 1: A(W) 1-0 B, C(W) 0-1 D
// Round 2: A(W) 0.5-0.5 D, C(W) 0-1 B
// Round 3: A(W) 1-0 C, D(W) 1-0 B
// Scores: A=2.5, D=2.5, B=1, C=0

const GAMES: Game[][] = [
  [
    { black: 'B', result: 1, white: 'A' },
    { black: 'D', result: 0, white: 'C' },
  ],
  [
    { black: 'D', result: 0.5, white: 'A' },
    { black: 'B', result: 0, white: 'C' },
  ],
  [
    { black: 'C', result: 1, white: 'A' },
    { black: 'B', result: 1, white: 'D' },
  ],
];

describe('numberOfWins', () => {
  it('counts rounds where player scored 1 point', () => {
    // A: beat B(1), drew D(0.5), beat C(1) → 2 wins
    expect(numberOfWins('A', GAMES)).toBe(2);
  });
});

describe('gamesWon', () => {
  it('counts OTB games won (excluding byes)', () => {
    // A: beat B, beat C → 2
    expect(gamesWon('A', GAMES)).toBe(2);
  });
});

describe('gamesPlayedWithBlack', () => {
  it('counts OTB games where player was black', () => {
    // A played white all 3 games → 0
    expect(gamesPlayedWithBlack('A', GAMES)).toBe(0);
    // D played black in R1 (vs C), black in R2 (vs A) → 2
    expect(gamesPlayedWithBlack('D', GAMES)).toBe(2);
  });
});

describe('gamesWonWithBlack', () => {
  it('counts OTB games won as black', () => {
    // D was black vs C (result=0 → D wins) and black vs A (result=0.5 → draw)
    // Only vs C counts → 1
    expect(gamesWonWithBlack('D', GAMES)).toBe(1);
    // A played white all games → 0
    expect(gamesWonWithBlack('A', GAMES)).toBe(0);
  });
});

describe('roundsElectedToPlay', () => {
  it('returns total OTB games (no byes in fixture)', () => {
    expect(roundsElectedToPlay('A', GAMES)).toBe(3);
  });
});

describe('standardPoints', () => {
  it('awards 1 for scoring more, 0.5 for equal, 0 for less', () => {
    // A: beat B (1>0 → 1), drew D (0.5=0.5 → 0.5), beat C (1>0 → 1) → 2.5
    expect(standardPoints('A', GAMES)).toBe(2.5);
  });
});
