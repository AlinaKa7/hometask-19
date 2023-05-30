// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише 
//числових елементів даного масиву.
let arrayOfChars = [3, 10, 'element', 33, false, 77, null, 11, 45];
let numbersArray = [];

for (i = 0; i < arrayOfChars.length; i++) {
  if (typeof arrayOfChars[i] === 'number') {
      numbersArray.push(arrayOfChars[i])
  }
}

function findAverage() {
  let sumOfNumbers = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sumOfNumbers += numbersArray[i];
  }
  return average = sumOfNumbers / numbersArray.length;
}
findAverage();
console.log(average);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
//вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = parseInt(prompt('Please, enter first number').replaceAll(' ', ''));
let y = parseInt(prompt('Please, enter second number').replaceAll(' ', ''));
let znak = prompt('Please, enter an operator (+, -, *, /, % or ^)').replaceAll(' ', '');
let resultOfCalc = 0;

function doMath() {
  switch (znak) {
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '/':
        result = x / y;
        break;
    case '*':
        result = x * y;
        break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      //result = Math.pow(x, y)
      break;
  }
  return resultOfCalc;
}
let functionCalc = doMath();
console.log(functionCalc);


// Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.
let array = [];
let rows = parseInt(prompt('How many rows do you want to create?').replaceAll(' ', ''));
let cols = parseInt(prompt('How many columns do you want to create?').replaceAll(' ', ''));

function createArray() {
  for (let i = 0; i < rows; i++) {
    array.push([]);

    for (let j = 0; j < cols; j++) {
      let elements = prompt('Enter text to fill elements').toLowerCase().replaceAll(' ', '');
      array[i].push([elements]);
    }
  }
  console.log(array);
}

let functionResult = createArray();


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.

let string = 'Hello world';
let charactersToRemove = prompt('Which letters do you want to remove?').replaceAll(' ', '');

function removeCharacters(string, charactersToRemove) {
    let result = ''; 
    for (let i = 0; i < string.length; i++) {
        if (!charactersToRemove.includes(string[i])) {
            result += string[i];
        } 
    }
    return result;
}

let result = removeCharacters(string, charactersToRemove);
console.log(result); 