// Задание 1. Выведите все элементы массива с индексами, которые кратны 3м. Количество элементов массива равно n.

function task1(arr) {
  arr.filter((el, i) => {
    if (i % 3 === 0 && i > 0) {
      console.log(el);
    }
  });
}
task1(["green", "yellow", "blue", "black", "purple"]);

// Задание 2. Выведите все четные элементы массива. Количество элементов массива равно n.

function task2(arr) {
  arr.filter((el) => {
    if (el % 2 === 0) {
      console.log(el);
    }
  });
}
task2([1, 3, 5, 6, 8, 22, 55]);

// Задание 3. Дан массив, состоящий из слов. Замените первую букву каждого слова на заглавную. Вывести результат в виде строки.

// Например, a=a=['В','лесу','родилась','елочка'] -> s="В Лесу Родилась Елочка"

function task3(arr) {
  const result = arr.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  console.log(result.join(" "));
}
task3(["В", "лесу", "родилась", "елочка"]);

// Задание 4. Дана строка. Поменяйте местами первую и последнюю букву каждого слова. Используйте методы split и join. Например, s="В лесу родилась елочка" -> s1= “В уесл ьодиласр алочке”

function task4(str) {
  const result = str.split(" ").map((el, i, arr) => {
    if (el.length == 1) return el;
    let firstLatter = el[0];
    let lastLetter = el[el.length - 1];
    return lastLetter + el.slice(1, el.length - 1) + firstLatter;
  });
  console.log(result.join(" "));
}
task4("В лесу родилась елочка");

// Задание 5. Сформируйте массив, состоящий из вещественных чисел. Выведите положительные элементы массива на экран. Определите количество положительных элементов массива. Найти произведение отрицательных элементов массива.

function task5(arr) {
  const negative = [];
  const positive = arr.filter((el) => {
    if (el > 0) {
      console.log(el);
      return el;
    } else {
      negative.push(el);
    }
  });
  const numberOfPositive = positive.length;
  console.log(numberOfPositive);
  const negativeMult = negative.reduce((acc, cur) => acc * cur, 1);
  console.log(negativeMult);
}
task5([1.23, 5.67, -7.8, -1.0, 0.32, -4.5]);

// Задание 6. В массиве целых чисел определить число инверсий. Инверсией называется пара элементов, в которой большее число расположено слева от меньшего. Например, 24 35 29 44 8 22 4 содержит 3 инверсии.

function task6(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
    } else {
      continue;
    }
  }
  console.log(count);
}
task6([24, 35, 29, 44, 8, 22, 4]);

// Задание 7. Разработайте программу, в которой существуют два массива с ростом игроков двух команд (в см). Определить, имеются ли в данных командах игроки одинакового роста.

function task7(arr1, arr2) {
  for (let player of arr1) {
    if (arr2.includes(player)) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
task7([156, 178, 435, 345], [178, 343, 166]);

// Задание 8. Разработайте программу, которая определяет, имеется ли в заданном целочисленном массиве arr(10) хотя бы одна пара совпадающих по значению элементов.

function task8(arr) {
  for (let el of arr) {
    // console.log(el, arr.indexOf(el), arr.lastIndexOf(el));
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
task8([24, 35, 29, 44, 8, 22, 24, 33, 29]);
task8(["abvg", "black", "apple", "apple"]);

// Задание 9. Для данного списка объектов

const students = [
  { name: "Tirion", class: "B", mark: 3 },

  { name: "Keit", class: "A", mark: 3 },

  { name: "Ramsey", class: "A", mark: 4 },

  { name: "Mike", class: "B", mark: 5 },

  { name: "Alex", class: "C", mark: 2 },
];

// Посчитайте средний балл, а также максимальный и минимальный. Посчитайте общую сумму оценок и количество студентов.
// Реализуйте функцию для группировки объектов по классу. Функция принимает аргументами массив объектов. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.

function task9(arr) {
  const marks = [];
  for (let el of arr) {
    marks.push(el.mark);
  }
  const min = marks.sort((a, b) => a - b)[0];
  console.log(min);
  const max = marks[marks.length - 1];
  console.log(max);
  const total = marks.reduce((acc, cur) => acc + cur, 0);
  console.log(total);
  const average = total / marks.length;
  console.log(average);
}
task9(students);

function task10(arr) {
  const result = {
    http: 0,
    https: 0,
  };

  arr.forEach((el) => {
    if (el.includes("https://")) {
      result["https"]++;
    } else {
      result["http"]++;
    }
  });

  console.log(result);
  return result;
}

// Задание 10.
// Реализуйте функцию, которая принимает на вход список сайтов, а возвращает объект, в котором указано количество сайтов, расположенных на каждом домене, если домен передан без указания протокола, то по умолчанию берется http.
const sites = [
  "http://google.com",
  "https://hexlet.io",
  "yandex.ru",
  "dzen.ru",
  "https://ya.ru ",
  "https://github.com",
  "http://mail.ru",
];

task10(sites);
