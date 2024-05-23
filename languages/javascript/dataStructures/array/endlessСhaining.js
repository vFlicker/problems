/*
  Завдання: Оптимізація обробки даних від API в контексті каналів.

  Нижче наведено два підходи до оптимізації обробки даних, отриманих від API, у відношенні до каналів. Обидва підходи вирішують одну і ту ж задачу, але використовують різні техніки обробки даних та мають різну ефективність і складність за часом та пам'яттю.

  Перший метод `enhanceApiResponseBad` використовує послідовну обробку даних за допомогою методів `filter`, `map` та інших. Кожен з цих методів створює новий масив на кожній ітерації, що може призвести до зайвого споживання пам'яті та більшої складності за часом. Даний метод має більшу складність за часом і використовує більше пам'яті, але може бути більш читабельним для деяких розробників.

  Другий метод `enhanceApiResponseGood` використовує функцію `reduce`, яка працює з одним масивом та накопичує результати обробки в одному масиві. Він є більш ефективним використовує менше пам'яті, оскільки не створює новий масив на кожній ітерації, і має меншу складність за часом. Цей метод є більш оптимальним для обробки великих наборів даних.

  В обох методах результатом є масив каналів, який був оптимізований і внесені в нього необхідні зміни.
*/

/**
 * Новий масив створюється на кожний виклик методу
 * filer або map.
 *
 * const enhanceApiResponseBad = (apiResponse) => {
 *   const filteredChannels = []
 *   const identificatorChannels = []
 *   const modifyImagesChannels = []
 * 
 *   for (const channel of apiResponse.channels) {}
 *   for (const channel of filteredChannels) {}
 *   for (const channel of identificatorChannels) {}
 *   for (const channel of modifyImagesChannels) {}
 *
 *   return channels;
 * }
 *
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(5 * n)`
 */
 const enhanceApiResponseBad = (apiResponse) => {
  const channels = apiResponse.channels
    .filter(filterEmptyTimelines)
    .map(addIdentificator)
    .map(modifyImages)
    .map(removeParams)
    .map(setSession)

  return channels;
}

/**
 * Створюється тільки один масив.
 *
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(n)`
 */
const enhanceApiResponseGood = (apiResponse) => {
  const channels = apiResponse.channels.reduce((acc, channel) => {
    if (!hasEmptyTimelines(channel.timelines)) {
      acc.push(setChannelURL(reduceImagesObject(addIDToChannel(channel))));
    }

    return acc;
  }, []);

  return channels;
}
