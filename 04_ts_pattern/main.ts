import { match } from 'ts-pattern';

interface Game {
    genre: string
    company: string
}

const game: Game = {
    genre: "rpg",
    company: "nintendo"
}

// const gameName = (() => {
//     if (game.genre === 'rpg') {
//         if (game.company === 'enix') {
//             return 'dq1';
//         } else if (game.company === 'nintendo') {
//             return 'pokemon';
//         }
//         return 'ff1';
//     } else if (game.genre === 'simulation') {
//         if (game.company === 'maxis') {
//             return 'simcity';
//         }
//         return '';
//     }
//     return '';
// })();
// console.log(gameName);

const gameName = match(game)
    .with({ genre: 'rpg', company: 'enix' }, () => 'dq1')
    .with({ genre: 'rpg', company: 'nintendo' }, () => 'pokemon')
    .with({ genre: 'rpg' }, () => 'ff1')
    .with({ genre: 'simulation', company: 'maxis' }, () => 'simcity')
    .otherwise(() => '');
console.log(gameName);
