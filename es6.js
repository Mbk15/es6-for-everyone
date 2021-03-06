const person = {
  name: "Mbk",
  job: "Web Dev",
  city: "Ibadan",
  bio: "Munkamish is a really cool guy that loves to teach web devolpment",
};

const markup = `
   <div>
   <h2>
   ${person.name}
   <span>${person.job}</span>
   </h2>
   <p>${person.city}</p>
   <p>${person.bio}</p>
   </div>
  `;

//  function to highlight values within a template literals
function highlights(strings, ...values) {
  let str = "";
  strings.forEach((string, i) => {
    str += ` ${string} <span class="hl"> ${values[i] || ""}</span>`;
  });

  return str;
}
const name = "Snickers";
const age = 100;
const gender = "";
const sentence = highlights`My dog's name is ${name} and he is ${age} years old with gender ${gender}`;

console.log(sentence);

// document.body.innerHTML = sentence;
function addAbbr(strings, ...values) {
  const abbreviated = values.map((value) => {
    if (dict[value]) {
      return `<abbr title ="${dict[value]}">${value}</abbr>`;
    }
    return value;
  });
  console.log(abbreviated);
}

const dict = {
  HTML: "Hyper Text Markup Language",
  CSS: "Cascading Style Sheets",
  JS: "Javascript",
};

const first = "Munkamish";
const last = "Olalekan";

const say = addAbbr`Salam Alaykum, my name is ${first} ${last} and I love to code ${"HTML"},  ${"CSS"} and  ${"JS"}`;

// Strings method

const course = "Algorithm";

const flightNumber = " DC-346ASH-780-JHG";

const accountNumber = "02427791336";

const make = "Prado";

const model = "X89";

const colour = "Royal Blue";

//startsWith
flightNumber.startsWith("C", 2);
//endWith
flightNumber.endsWith("HG");
//includes
accountNumber.includes("77");
//repeat
function leftPad(str, length = 15) {
  return ` ${" ".repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));

console.log(leftPad(model));

console.log(leftPad(colour));

// Destructuring objects
const Mubby = {
  first: "Mubarak",
  last: "Muhammadjamiu",
  country: "Nigeria",
  city: "Ibadan",
  twitter: "@Ash-shattry",
};

const { country, twitter: tweet } = Mubby;
console.log(country, tweet);
// setting default in Destructuring
const settings = { width: 300, color: "grey" };

const { width = 100, height = 1.7, color = "blue", fontSize = 16 } = settings;

console.log(width, height, color, fontSize);

const { w: widt = 600, h: heigh = 150 } = { w: 900 };
console.log(widt, heigh);
// destructuring arrays
const details = ["Mbk", 15, "ash-shattry.vercel.app"];

const [nam, id, url] = details;

console.log(nam, id, url);

const datas = "Basketball, Sports,90944";
const getter = datas.split(" ,");
console.log(getter);

const [item, category, num] = datas.split(",");

console.log(item, category, num);

//swapping variables with destructuring

let reciterMakkah = "Saad Al Ghamdy";
let reciterMadinah = "Abubakar Ash-Shattry";
console.log(reciterMakkah, reciterMadinah);
[reciterMakkah, reciterMadinah] = [reciterMadinah, reciterMakkah];
console.log(reciterMakkah, reciterMadinah);

//destructuring functions

function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GBP: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.31,
  };

  return converted;
}
console.log(convertCurrency(150));

const { USD, GBP, AUD, MEX } = convertCurrency(280);

console.log(USD, GBP, AUD, MEX);

// for of loop in action

const cuts = ["Chuck", "Brisket", "Shank", "Shot Rib"];

for (const [i, cut] of cuts.entries()) {
  console.log(`${cut} is the ${i + 1} item`);
}

function addUpumbers() {
  let total = 0;
  for (n of arguments) {
    total += n;
  }

  console.log(total);
  return total;
}

addUpumbers(34, 56, 78, 90, 12, 34, 45);

const mbk = "Munkamish Olalekan";

for (const char of mbk) {
  console.log(char);
}

/*more on for of loop>*/

//using native forloop
for (let i = 0; i < cuts.length; i++) {
  console.log(`This is the forloop ouput ${cuts[i]}`);
}

//using forEach
cuts.forEach((cut) => {
  console.log(`This is the forEach ouput ${cut}`);
});

//using forIn
for (cut in cuts) {
  console.log(`This is the forIn ouput ${cut}`);
}

//using forOf which is the best for absolutely any Array type of data

for (cut of cuts) {
  console.log(`This is the forOf ouput ${cut}`);
}

/*Iterating Object enteries*/

const apple = {
  color: "Red",
  size: "medium",
  weight: 50,
  sugar: 10,
};
//using forOf for Objects
for (const fruit of Object.keys(apple)) {
  const value = apple[fruit];
  console.log(fruit, value);
}

//using forIn which is the best for absolutely any Object data type

for (const fruit in apple) {
  const value = apple[fruit];
  console.log(fruit, value);
}

// Array.from and Array.of usage (note, both are not on the prototype)

const personM = document.querySelectorAll(".people p");
console.log(personM); //prototype here is nodeList

const personmArray = Array.from(personM); //protoype converted with this line

const people = personmArray.map((persons) => persons.textContent);

console.log(people); // proto has been turned to array with Array.from()

//cleaner method

const peopleArray = Array.from(personM, (resultedPerson) => {
  return resultedPerson.textContent;
});

console.log(peopleArray);

//using Array.from() with function

function sumAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

console.log(sumAll(23, 56, 78, 90, 234, 89));

//Array.of() turns arguments into Array

const arrayOf = Array.of(23, 45, 67, 89, 09);

console.log(arrayOf);
//Array.some() and .every()

const leaguePosition = [3, 7, 2, 18, 11, 20, 6];
const checkEuroQual = leaguePosition.some((position) => position >= 6);

console.log(checkEuroQual); //returns true if at least one of the positions is greater than or equals to 6

const checkChampionQual = leaguePosition.every((champ) => champ >= 4);

console.log(checkChampionQual); // returns false cos not all the teams made champions Qualification

/********** THE ... SPREAD OPERATOR *************/

const mubrek = "Ash-shattry";

console.log([...mubrek]); // spreads each of the string element as individual element

const featured = ["Deep Dish", "Peperoni", "BBQ", "Gizzardo"];

const speciality = ["Meatza", "Spicy Mama", "Margherita"];

const pizzas = [...featured, ...speciality]; //spreads the first array and the second array in a single one

console.log(pizzas);

const fridayPizzas = pizzas; // the spread output can be copied through assignment operation

fridayPizzas[0] = "Ekuru";

console.log(fridayPizzas); //returns all pizzas with the first element altered and the first pizza tampered

const thursdayPizza = [...pizzas]; // copies everything without tampering the original element

thursdayPizza[0] = "Ponmo";

console.log(thursdayPizza);

console.log(pizzas);

for (pizz of pizzas) {
  console.log(pizz);
}
/*********Spread Operator Practice */

const heading = document.querySelector(".jump");
const headingLetters = heading.textContent;
const testBreak = breakLetters(headingLetters);
console.log(headingLetters);
console.log(testBreak);
const finalBreak = testBreak.map((test) => `<span>${test}</span>`).join(" ");
heading.innerHTML = finalBreak;
console.log(finalBreak);
function breakLetters(word) {
  return [...word];
}

//spreading into a function

const investors = ["Eintein", "Alexander", "Graham", "Newton"];
const newInventors = ["musk", "Job", "Ma"];

investors.push(newInventors);
console.log(investors); //  returns array of investors with newInvestors as an embeded array section

//to ammend that, we can use apply() method to correct it
investors.push.apply(investors, newInventors);

console.log(investors);

//using the spread operator ultimate solution

investors.push(...newInventors);

console.log(investors);

//spreading into a real function

const spreadName = ["Mubarak", "Jamiu"];

function sayTeslim(first, last) {
  alert(`Salam alaykum ${first} ${last}`);
}

console.log(sayTeslim(...spreadName)); //Spread Operator comes in handy instead of using array bracket notation

/** The REST Parameter*/

//majorly used in function and destructuring

//function useCase
function convertNaira(rate, ...amounts) {
  return amounts.map((amount) => amount * rate);
}

console.log(convertNaira(1.45, 67, 89, 90, 45, 33));

//Destructuring UseCase

const runner = ["Usain Bolt", 124, 4.5, 6.6, 8.4];

const [runnerName, runId, ...runs] = runner;

console.log(runnerName, runId, runs); // returns the name , id and the rest inputs as run

/****ES6 Promises******/

console.log("Going to fetch Data from Mubarak/s Blog");
const promisePosts = fetch("https://jsonplaceholder.typicode.com/posts"); //fetc data from api
promisePosts.then((data) =>
  data
    .json()
    .then((data) => {
      // block to process data
      console.log(data);
    })
    .catch((err) => {
      //  Catch error
      console.error(err);
    })
);

// Building your own Promises

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("MBk dey enjoy JS");
  }, 200);
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

//posts data
const posts = [
  { title: "I love Javascript", author: "Munkamish", id: 1 },
  { title: "I be React Fan Boy", author: "Shattry", id: 2 },
  { title: "I Sabi this JS small ooo ", author: "Mubarak", id: 3 },
];
//authors data
const authors = [
  { name: "Mbk", twitter: "@Dela Cruise", bio: "Nigerian" },
  { name: "Jokanola", twitter: "@yusuf", bio: "European" },
  { name: "Winnie", twitter: "@fullstackbeast", bio: "Agba Dev" },
];

function getPostById(id) {
  //create new promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((post) => post.id === id); // look for matching post
      if (post) {
        resolve(post);
      } else {
        reject(Error("No match post"));
      }
    });
  }, 2000);
}
getPostById(3).then((post) => {
  console.log(post);
});

//MULTIPLE PROMISE

const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 40, conditions: "sunny with clouds" });
  }, 2000);
});

const tweetss = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["I like Cake", "BBQ also isnt bad"]);
  });
}, 500);

Promise.all([weather, tweetss]).then((responses) => {
  const [weatherInfo, tweetsInfo] = responses;
  console.log(weatherInfo, tweetsInfo);
});

const usersPlace = fetch("https://jsonplaceholder.typicode.com/users");

const albulmPlace = fetch("https://jsonplaceholder.typicode.com/albums");

Promise.all([usersPlace, albulmPlace]).then((responses) => {
  return Promise.all(responses.map((res) => res.json())).then((responses) => {
    //transform response into array
    console.log(responses);
  });
});

//Using Symbols

/** Prototypes in Javascript
 *  * Object
 * String
 * Boolean
 * Number
 * Null
 * Undefined
 * (New Comer) Symbol
 */

const Shatir = Symbol("Shatir");

const Abubakr = Symbol("shatir");

console.log(Shatir, Abubakr);

const classRoom = {
  [Symbol("mubarak")]: { name: "Olalekan", gender: "male", age: 10 },
  [Symbol("Yusuf")]: { name: "Jokanola", gender: "male", age: 20 },
  [Symbol("mubarak")]: { name: "Olalekan", gender: "male", age: 10 },
};
//symbols are uniterable and can hence be used to store secured data

console.log(classRoom);

//To acesss the Data within encrypted Symbols
const syms = Object.getOwnPropertySymbols(classRoom);

const symb = syms.map((sym) => classRoom[sym]);
console.log(symb);
