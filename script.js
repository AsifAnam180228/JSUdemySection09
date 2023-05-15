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
