/*
  Напишіть функцію, яка з несортованого списку рахунків
  гравців віддає топ-3 найкращих, не вдаючись
  до повного сортування.
*/

/**
 * Складність за часом — `О(n^2)`
 * Складність за пам'яттю — `О(1)`
 */
const topThree = (data) => {
  // Ітеруватимемося тричі, або, якщо в масиві менше елементів,
  // на один менше його довжини
  const iterations = Math.min(data.length - 1, 3);

  for (let i = 0; i < iterations; i++) {
    // Всередині ітерації проходитимемо повний масив
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j].leaguePoints > data[j + 1].leaguePoints) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }

  return data.slice(-3);
};

const data = [
  {
    "login": "DreamLess",
    "leaguePoints": 956
  },
  {
    "login": "cavernous",
    "leaguePoints": 1056
  },
  {
    "login": "SaiyanBroadway",
    "leaguePoints": 1432
  },
  {
    "login": "BlondiePlanet",
    "leaguePoints": 1045
  },
  {
    "login": "Mountaintrid",
    "leaguePoints": 1130
  },
  {
    "login": "cathead",
    "leaguePoints": 930
  },
  {
    "login": "rstrazir",
    "leaguePoints": 356
  },
  {
    "login": "stypeano",
    "leaguePoints": 4
  },
  {
    "login": "CzarStories",
    "leaguePoints": 568
  },
  {
    "login": "ConspiracyLil",
    "leaguePoints": 18
  },
  {
    "login": "GottaSaiyan",
    "leaguePoints": 931
  },
  {
    "login": "Goldenelox",
    "leaguePoints": 932
  },
  {
    "login": "Breakingbing",
    "leaguePoints": 64
  },
  {
    "login": "Rectionom",
    "leaguePoints": 42
  },
  {
    "login": "BoostScooby",
    "leaguePoints": 1476
  },
  {
    "login": "JoshChase",
    "leaguePoints": 931
  }
];

console.log(topThree(data));
// [
//   { login: 'Mountaintrid', leaguePoints: 1130 },
//   { login: 'SaiyanBroadway', leaguePoints: 1432 },
//   { login: 'BoostScooby', leaguePoints: 1476 }
// ]
