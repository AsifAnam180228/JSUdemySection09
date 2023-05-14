'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//ES6 enhanced object methods

  //ES6 enhanced object literals
   openingHours : {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta(ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    //console.log(mainIngredient);
    //console.log(otherIngredients);
  },

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery(starterIndex = 1,
                mainIndex = 0,
                time = '20:00',
                address){
    console.log(`Order receieved! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!!!`)
  },
};
restaurant.orderDelivery(2, 2, '22:30', 'Dhaka, 1000'
)
restaurant.orderDelivery({
  address: 'Dhaka',
  starterIndex:2,
});
/*
//property name
const properties = Object.keys(openingHours)
console.log(properties);
console.log(`We are open on ${properties.length}`);

for (const day of Object.keys(openingHours)){
  console.log(day);
}

let openStr = (`We are open on ${properties.length} days: `);

for (const day of properties){
  openStr+= `${day} `
}
console.log(openStr);

// property values

const [values] = Object.values(openingHours);
console.log(values);

const [keys, value] = [Object.keys(openingHours) ,Object.values(openingHours)];
console.log(keys, value);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

 */
/*
if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}
if(restaurant.openingHours && restaurant.openingHours.fri){
  console.log(restaurant.openingHours.fri.open);
}
//optional chaining
console.log(restaurant.openingHours.thu?.open); //exist na korle direct undefined without error

const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days){
  const open = (restaurant.openingHours[day]?.open) ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
//Optional chaining in methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//optional chaining in arrays
const users = [{
  name: 'Shaon',
  email: 'hello@shaon.com'
}]
console.log(users[3]?.name ?? 'User array empty');

 */
/*
console.log(restaurant.openingHours);
restaurant.orderDelivery(2, 2, '22:30', 'Dhaka, 1000'
)
restaurant.orderDelivery({
  time:'22:30',
  address: 'Dhaka',
  mainIndex:2,
  starterIndex:2,
});
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2={
  name: 'La Pizza',
  owmer: 'Piere Rossi',

};
//OR assignment operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||=10
// rest2.numGuests ||=10

//Nullish assignment operator

rest1.numGuests ??=10
rest2.numGuests ??=10

// rest1.owmer = rest1.owmer && '<ANONYMOUS>';
// rest2.owmer = rest2.owmer && '<ANONYMOUS>';
//AND  assignment operator

rest1.owmer &&= '<ANONYMOUS>';
rest2.owmer &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);


 */

/*
//////////////////////The Nullish Coalescing Operator (??)//////////////
// restaurant.numGuests = 0
const guest1 = restaurant.numGuests|| 10
console.log(guest1);

//Nullish: null and undefined(NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


 */
/*
//Logical operator can use any datatype and return any datatype, short-circuting

console.log(3 || 'Shaon');
console.log('' || false);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0
const guest1 = restaurant.numGuests ? restaurant.numGuests :10
console.log(guest1);

const guest2 = restaurant.numGuests||10
console.log(guest2);

console.log(0 && 'Shaon');


console.log('-------AND--------')
console.log(3 && 'Shaon');
console.log('' && false);

//practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach')
}
//alternate way
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onion')


 */

////////////////////////////////////////////////////
//------------------Rest pattern and Parameters--------------
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushroom')

//1) Destructuring
//spread becauser on RIGHT side of =
const arr = [1, 2, ...[3, 4]]
//REST because LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]
console.log(a, b, others);

const [pizza, ,risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

//Objects
// const {sat, ...weekdays}= restaurant.openingHours
// console.log(weekdays);

//2) Functions
const add = function(...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i]
  }
  console.log(sum);
}
add(2,3)
add(5,3,7,2)
add(8,2,4,5,6,7,1,9)

const x = [23, 10,2]
add(...x)



////////////////////////////////////////////////////
/*
const {name,mainMenu, categories} = restaurant
console.log(name, mainMenu, categories)


console.log('---------------------------------------------------')

const {
  name: restaurentName,
  openingHours: hours,
  categories: tags
  } = restaurant

//default values
console.log(restaurentName, hours, tags)
const {menu =[], starterMenu:starters = [] }= restaurant
console.log(menu, starters)


 */
/*
//Mutating variables
let a = 111;
let b = 999;
const obj = { a:23, b:7, c:14};

({a, b} = obj);
console.log(a,b);
//Nested objects

const {
  fri: {
    open:o,
    close: c
  }
} = restaurant.openingHours
console.log(o, c);


// const {fri} = restaurant.openingHours;
// console.log(fri)

 */
///////////////////////////////////////////////////////
/*
//spread operator
const arr = [7,8,9]
const badNewArr = [1,2, arr[0], arr[1], arr[2]]
console.log(badNewArr)
const newArr = [1, 2, ...arr]
console.log(newArr)
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log('---------------------------');
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Main menu copy: '+mainMenuCopy);
//Concatenate array
const menu = [...restaurant.mainMenu, ...mainMenuCopy]
console.log('Concatenated menu: ' + menu);


 */



//////////////////////////////////////////////////
/*
//Iterables: arrays, strings, maps, sets
// not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str);
/*

 */
/////////////////////////////////////////////////
//realworld example
/*
const ingredients = [
  // prompt("Let\'s make pasta!  Ingredient 1? "),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?')
]
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

restaurant.orderPasta(...ingredients)//ES6

//Objects
const newRestaurent = {
  foundedIn: 1999, ...restaurant,
  founder: 'Shaon'
};
console.log(newRestaurent)
//copy object then change the object

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante Italiano'
console.log(restaurantCopy.name);
console.log(restaurant.name);

 */
/////////////////////////////////////////////
// const arr = [2,3,4]
//
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
//
// const [x,y,z] = arr
// console.log(x,y,z)
/*
let [main, , secondary] = restaurant.categories

console.log(main,secondary)
let temp = main
main = secondary
secondary = temp
// [main, secondary] = [secondary, main]
console.log(main, secondary)




//default values
const [p =1, q = 1, r = 1] = [8, 9]
console.log(p, q, r);
 */
//-------------------------------------------------------
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/

//----------------------------------------------------
// const [starter, mainCourse]=(restaurant.order(2,1))
// console.log(starter, mainCourse)
//
/*
const nested = [2,3,[5,6]]
const [i, ,[j, k]] = nested
console.log(i, j, k)

 */

///////////////////////////////challenge 1//////////////////
/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 120.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [player1, player2] = game.players
console.log(player1, player2);

//2.
const [gk, ...fieldPlayers] = player1
console.log(gk, fieldPlayers);
//3.
const allPlayers = [...player1, ...player2]
console.log(allPlayers);
//4.
const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Periscic']
console.log('-----------Players Final-----------');
console.log(playersFinal);
//5.
const {
  odds:{ team1, x: draw, team2}
} = game
console.log(team1, draw, team2);
//6.
const printGoals = function(...players) {
  console.log(`${players.length} goals scored`);
}
printGoals('Davis', 'Muller', 'Lewandowski', 'Kimich')
printGoals('Davis', 'Muller')
printGoals(...game.scored)

//7.
if(team1<team2){
  console.log(`Team 1 wins`);
}
else if(team2<team1){
  console.log(`Team 2 wins`);
}*/
