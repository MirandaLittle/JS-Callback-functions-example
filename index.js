'use strict';

// JS callback functions

// Callback function
const complimenter = name => {
  return name + " is cool!";
}

const changeStrings = (stringList, callbackFn) => {
  const result = [];
  for (const word of stringList){
    result.push(callbackFn(word));
  };
  return result;
};


const names = ["Jumbo", "Travis", "Alicia", "Barbara"];

console.log(changeStrings(names, complimenter));

// You can also pass other (anonymous) functions
console.log(changeStrings(names, (word) => word.toLowerCase()));