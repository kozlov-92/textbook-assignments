// #1. Прекрасные животные
// let animals = ['кот', 'лемур', 'баран', 'рыба']
// for (let i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + '-прекрасное животное'
// }
// console.log(animals) // ['кот-прекрасное животное', 'лемур-прекрасное животное', 'баран-прекрасное животное', 'рыба-прекрасное животное']
// ____________________________________________________________
// #2. Генератор случайных строк
// const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// let randomString = ''
// while (randomString.length < 10) {
//   let randomNumber = Math.floor(Math.random() * alphabet.length)
//   randomString += alphabet[randomNumber]
// }
// console.log(randomString) // фпыдойчтеп
// ____________________________________________________________
//#3. h4ck3r sp34k
// let input = 'javascript is awesome'
// let output = ''
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'a') {
//     output += 4
//   } else if (input[i] === 'e') {
//     output += 3
//   } else if (input[i] === 'i') {
//     output += 1
//   } else if (input[i] === 'o') {
//     output += 0
//   } else {
//     output += input[i]
//   }
// }
// console.log(output) // j4v4scr1pt 1s 4w3s0m3

// ____________________________________________________________
//#4. Игра "Виселица"
// const words = ['вода', 'лето', 'море', 'игра']

// const word = words[Math.floor(Math.random() * words.length)] // смартфон
// console.log(word)
// let answerArray = []
// let numberOfAttempts = 5
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = '_'
// }
// console.log(answerArray)
// let remainingLetters = word.length

// while (remainingLetters > 0 && numberOfAttempts > 0) {
//   alert(answerArray.join(' '))
//   let guess = prompt(
//     'Угадайте букву или нажмите отмена для выхода из игры'
//   ).toLowerCase()
//   numberOfAttempts--
//   if (numberOfAttempts === 0) {
//     alert('Вы использовали все попытки!')
//     break
//   }
//   if (guess === null) {
//     break
//   } else if (guess.length !== 1) {
//     alert('Необходимо ввести одну букву')
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess
//         remainingLetters--

//         alert('Есть такая буква')
//       }
//     }
//   }
// }
// alert('Вы угадали слово : ' + answerArray.join(' '))
//#1. Математические расчеты и функции
// const add = (number1, number2) => {
//   return console.log('сумма', number1 + number2)
// }
// const multiply = (number1, number2) => {
//   return number1 * number2
// }
// let result = multiply(36325, 9824)
// add(777, result) //сумма 356857577

// #2. Совпадают ли массивы?
// const areArraysSame = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return console.log('массивы разной длины')
//   }
//   if (arr1.join('') === arr2.join('')) {
//     return console.log('массивы одинаковые')
//   } else {
//     return console.log('массивы разные')
//   }
// }
// areArraysSame([1, 2, 3], [1, 2, 3]) // массивы одинаковые
// #3. «Виселица» и функции
const words = ['вода', 'лето', 'море', 'игра']
const pickWord = () => {
  return words[Math.floor(Math.random() * words.length)] // смартфон
}
const setupAnswerArray = (word) => {
  let answerArray = []
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'
  }
  return answerArray
}
const getGuess = () => {
  return prompt(
    'Угадайте букву или нажмите отмена для выхода из игры'
  ).toLowerCase()
}
const showAnswerAndCongratulatePlayer = () => {
  return alert('Вы угадали слово : ' + answerArray.join(' '))
}
const showPlayerProgress = (answerArray) => {
  return alert(answerArray.join(' '))
}
const updateGameState = (guess, word, answerArray) => {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess
      remainingLetters--

      alert('Есть такая буква')
    }
  }
}

const word = pickWord()
console.log(word)
const answerArray = setupAnswerArray(word)
console.log(answerArray)

let numberOfAttempts = 5 // количество попыток

let remainingLetters = word.length

while (remainingLetters > 0 && numberOfAttempts > 0) {
  showPlayerProgress(answerArray)
  let guess = getGuess()
  numberOfAttempts--
  if (numberOfAttempts === 0) {
    alert('Вы использовали все попытки!')
    break
  }
  if (guess === null) {
    break
  } else if (guess.length !== 1) {
    alert('Необходимо ввести одну букву')
  } else {
    updateGameState(guess, word, answerArray)
  }
}
showAnswerAndCongratulatePlayer()
