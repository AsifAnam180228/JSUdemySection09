'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object methods

  //ES6 enhanced object literals
  openingHours: {
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    console.log(`Order receieved! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!!!`);
  },
};
restaurant.orderDelivery(2, 2, '22:30', 'Dhaka, 1000');
restaurant.orderDelivery({
  address: 'Dhaka',
  starterIndex: 2,
});

////////////////Destructinng arrays/////////////////////////////
// const arr = [2,3,4]
//
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
//
// const [x,y,z] = arr
// console.log(x,y,z)
/*
//------------Swaping----------------
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
/*
//destructuring objects
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
//--------------spread operator------------------
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

/*
//................................Short circuiting.............................

console.log('...........OR............');
console.log(3 || 'Hello');
console.log('' || 'Hello');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('...........AND............');
console.log(0 && 'Hello');
console.log(7 && 'Hello');
console.log('' && 'Hello');
console.log(true && 0);
console.log(undefined && null);

console.log('Hello' && 23 && null && 'Hello');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
*/

/*
//......................the nullish coalescing operator.........................
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests || 10;
console.log(guestCorrect);
*/

/*
//...............Logical Assignment.................
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

//OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
//...................Arrays........................
const users = [{ name: 'Nazia', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


//........................Looping Arrays: the for loop..................................
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}

console.log([...menu.entries()]);


for (let i = 0; i < restaurant.length; i++) {
  console.log(restaurant[i]);
}

for (let i in weekdays) {
  console.log(weekdays[i]);
}

weekdays.forEach((day) => {
  console.log(day);
});
*/

// Optional Chaining .........................
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
// ..................................................................

// Looping Objects: Object Keys, Values, and Entries ....................
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
