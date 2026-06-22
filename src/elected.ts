import type { CompletedRound, Tiebreak } from '@echecs/tournament';

const isPlayerInRound = (player: string, round: CompletedRound): boolean =>
  round.games.some((g) => g.white === player || g.black === player);

const roundsElectedToPlay: Tiebreak = (player, rounds, _players) => {
  let count = 0;
  for (const round of rounds) {
    if (isPlayerInRound(player, round)) {
      count += 1;
    }
  }
  return count;
};

export { roundsElectedToPlay, roundsElectedToPlay as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
