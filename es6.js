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

//.find() and .findIndex()

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];
const post = posts.find((post) => {
  console.log(post); //returns all the posts data
  if (post.title === "optio molestias id quia eum") {
    return true;
  } else {
    return false;
  }
});
console.log(post); // returns the post data with the title defined

// cleaner method for .find()
const poster = posts.find(
  (posting) => posting.title === "dolorem dolore est ipsam"
);
console.log(poster);

const indexfinder = "optio molestias id quia eum";

const findindIndex = posts.findIndex((post) => {
  if (post.indexfinder === indexfinder) {
    return true;
  }
  return false;
});
console.log(findindIndex);
