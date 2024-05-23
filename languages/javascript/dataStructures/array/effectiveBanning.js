/*
  Заблокувати шоу в масиві на основі списку заборонених шоу.
*/

const BANNED_SHOWS = [];

/**
 * Складність за часом — `О(n * m)`, де n - кількість шоу, m - кількість заборонених шоу.
 * Складність за пам'яттю — `О(1)`
 */
const ineffectiveBanning = (shows) => {
  // Починається обхід всіх шоу
  shows.forEach((show) => {
    // Береться ID кожного
    const { id: showID } = show;

    // Запускається обхід заборонених шоу
    BANNED_SHOWS.forEach((bannedShow) => {
      // Тепер беремо ID кожного заблокованих
      const { id: bannedShowID } = bannedShow;

      // Порівнюємо ID і якщо збіг — помічаємо шоу як заблоковане
      if (showID === bannedShowID) show.isBanned = true;
    });
  });
};

/**
 * Складність за часом — `О(m)` де n - кількість шоу, m - кількість заборонених шоу.
 * Складність за пам'яттю — `О(n)`
 */
const effectiveBanning = (shows) => {
  const bannedShowsIDs = new Set();

  // Наповнили Set заблоковане ID
  BANNED_SHOWS.forEach(({ id }) => bannedShowsIDs.add(id));

  // Починається обхід всіх шоу
  shows.forEach((show) => {
    // Якщо ID поточного шоу є у сеті заблокованих — помічаємо його
    if (bannedShowsIDs.has(show.id)) show.isBanned = true;
  });
}

