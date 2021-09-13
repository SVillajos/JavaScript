/** *****************************************************************************************************
*** File Name:      whaleTalk.js
*** Description:    Program that translates an English phrase into whale speak
*** Author:         Samuel Villajos
*** Date:           12/09/2021
*****************************************************************************************************/


const input = "Help me, Obi-Wan Kenobi. You're my only hope.";  // Variable to hold the phrase to be translated
const vowels = ["a", "e", "i", "o", "u"]; // Variable to hold the vowels a whale can speak
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if(input[i] === 'e') {
        resultArray.push('ee');
      } else if (input[i] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase())
