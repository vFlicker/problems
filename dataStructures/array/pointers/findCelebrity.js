/*
  Вам дано групу людей, які представлені як екземпляри
  класу «Person» (Особа). Кожна особа може або не знати
  інших людей в групі. «Селебріті» визначається як та особа,
  яку знають всі в групі, але яка не знає нікого з них.
  Вам потрібно знайти «селебріті» серед заданої групи людей.
*/

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(1)`
 */
const findCelebrity = (persons) => {
  let leftPointer = 0;
  let rightPointer = persons.length - 1;

  while (leftPointer < rightPointer) {
    if (persons[leftPointer].knows(persons[rightPointer])) {
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }

  for (let i = 0; i < persons.length; i++) {
    const isNotHimself = i !== leftPointer;
    const knowCelebrity = persons[i].knows(persons[leftPointer]);
    const celebrityKnowsPerson = persons[leftPointer].knows(persons[i]);

    if (isNotHimself && (!knowCelebrity || celebrityKnowsPerson)) {
      return null;
    }
  }

  return persons[leftPointer];
};

class Person {
  constructor (name) {
    this.name = name;
    this.persons = [];
  }

  addPerson(person) {
    this.persons.push(person);
  }

  knows(person) {
    return this.persons.includes(person);
  }
}

const first = new Person('first');
const second = new Person('second');
const third = new Person('third');
const fourth = new Person('fourth');
const fifth = new Person('fifth');

first.addPerson(second);

first.addPerson(third);
second.addPerson(third);
fourth.addPerson(third);
fifth.addPerson(third);

fifth.addPerson(first);
fifth.addPerson(fourth);

console.log(findCelebrity([first, second, third, fourth, fifth]));
