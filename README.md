# Number of Wins

[![npm](https://img.shields.io/npm/v/@echecs/number-of-wins)](https://www.npmjs.com/package/@echecs/number-of-wins)
[![Test](https://github.com/mormubis/number-of-wins/actions/workflows/test.yml/badge.svg)](https://github.com/mormubis/number-of-wins/actions/workflows/test.yml)
[![Coverage](https://codecov.io/gh/mormubis/number-of-wins/branch/main/graph/badge.svg)](https://codecov.io/gh/mormubis/number-of-wins)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Number of Wins** is a TypeScript library implementing win-counting tiebreaks
for chess tournaments, following the
[FIDE Tiebreak Regulations](https://handbook.fide.com/chapter/TieBreakRegulations032026)
(sections 7.1–7.4 and 7.6–7.8). Zero runtime dependencies.

## Installation

```bash
npm install @echecs/number-of-wins
```

## Quick Start

```typescript
import { numberOfWins } from '@echecs/number-of-wins';

const games = [
  { blackId: 'B', result: 1, round: 1, whiteId: 'A' },
  { blackId: 'C', result: 0.5, round: 2, whiteId: 'A' },
  { blackId: 'A', result: 0, round: 3, whiteId: 'D' },
];

const wins = numberOfWins('A', games);
// Returns 1 (one win including forfeit wins)
```

## API

All functions accept `(playerId: string, games: Game[])` and return `number`.
They are drop-in compatible with the shared `Tiebreak` type
`(playerId: string, games: Game[], players: Player[]) => number`.

### `numberOfWins(playerId, games)`

**FIDE section 7.1** — Total number of wins. Counts all games where `playerId`
scored 1 point, including forfeit wins (bye rounds that award a full point).

### `gamesWon(playerId, games)`

**FIDE section 7.2** — Wins in played games only. Like `numberOfWins` but
excludes bye rounds — only counts wins from over-the-board games.

### `gamesPlayedWithBlack(playerId, games)`

**FIDE section 7.3** — Number of games played with the black pieces. Byes have
no colour assignment and are excluded.

### `gamesWonWithBlack(playerId, games)`

**FIDE section 7.4** — Number of wins with the black pieces. Byes are excluded.

### `roundsElectedToPlay(playerId, games)`

**FIDE section 7.6** — Number of rounds the player chose to participate in.
Returns the total number of games minus bye rounds.

### `standardPoints(playerId, games)`

**FIDE section 7.8** — Points from standard (classical) time-control games.
Counts only over-the-board results — wins score 1, draws score 0.5, losses
score 0. Byes are excluded.

## Contributing

Contributions are welcome. Please open an issue at
[github.com/mormubis/number-of-wins/issues](https://github.com/mormubis/number-of-wins/issues).
