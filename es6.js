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
