/*
  Напишіть обмежувач швидкості обробки запитів системою логування.
  Всі повідомлення надходять у наступному форматі:

  ```
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 20,
  }
  ```

  Необхідно ігнорувати всі повідомлення з однаковим вмістом,
  які надходили з проміжком менше п'яти секунд від останнього
  (різниця в timestamp менше 5). І замість їх виведення дописувати
  в кінець попереднього такого ж повідомлення (x${кількість повторень}):
  наприклад, Cannot read property 'score' of undefined (x3),
  якщо воно зустрілося тричі за останні п'ять секунд.
*/

/**
 * Громіздка реалізація фільтрації.
 */
const filterLogs1 = (logs) => {
  const map = new Map();

  return logs.filter((log) => {
    const { message: currentMessage, timestamp: currentTimestamp } = log;

    if (!map.has(currentMessage)) {
      map.set(currentMessage, currentTimestamp);
      return true;
    }

    const lastTimeStamp = map.get(currentMessage);

    if (currentTimestamp - lastTimeStamp > 5) {
      map.set(currentMessage, currentTimestamp);
      return true;
    }

    map.set(currentMessage, currentTimestamp);
    return false;
  });
};

/**
 * Компактна реалізація фільтрації.
 */
const filterLogs2 = (logs) => {
  const map = new Map();

  return logs.filter((log) => {
    const { message: currentMessage, timestamp: currentTimestamp } = log;
    const lastTimeStamp = map.get(currentMessage);

    map.set(currentMessage, currentTimestamp);

    return lastTimeStamp === undefined || currentTimestamp - lastTimeStamp > 5;
  });
};

const DELAY = 5;

const logger = (logs) => {
  const map = new Map();
  const filteredLogs = [];

  for (const log of logs) {
    const {
      message: currentMessage,
      timestamp: currentTimestamp
    } = log;

    const {
      timestamp: previousTimeStamp,
      index: previousIndex,
      count: previousCount
    } = map.get(currentMessage) || {};

    // Якщо елемент стався вперше, або значно пізніше попереднього
    if (previousTimeStamp === undefined || currentTimestamp - previousTimeStamp > DELAY) {
      // За повідомленням-ключем покладемо час зустрічі цього повідомлення та місце, де воно лежить
      map.set(currentMessage, {
        timestamp: currentTimestamp,
        index: filteredLogs.length,
        count: 1,
      });

      // Додаємо елемент у масив
      filteredLogs.push({
        message: currentMessage,
        timestamp: currentTimestamp,
      });
    } else { // Якщо зустрічали, і раніше ніж DELAY
      const filteredLog = filteredLogs[previousIndex];
      const updatedCount = previousCount + 1;

      // Оновимо час останньої зустрічі
      map.set(currentMessage, {
        timestamp: currentTimestamp,
        index: previousIndex,
        count: updatedCount,
      });

      // Оновимо останнє подібне повідомлення, щоб відобразити, що воно дублюється
      filteredLog.message = `${currentMessage} ${updatedCount}x`;
    }
  }

  return filteredLogs;
};

const logs = [
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 0,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 0,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 3,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 5,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 10,
  },
  {
    "message": "Uncaught RangeError: Maximum call stack size exceeded",
    "timestamp": 14,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 15,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 18,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 21,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 22,
  },
];

console.log(logger(logs));

export {};
