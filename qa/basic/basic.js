// data type
// undefined null bool string symbol number object

var myName = "test";
let ourName = "test";
const pi = 3.14;

// variable naming convention camelCase
var myStr = "i\"m";
var myStr1 = `"i'm fatoni"`;
var myStr2 = myStr1[0];
var myStr3 = [["john"],[23]];
var myStr4 = {firstName:"john", lastName:"doe"};

/**
\' \'' \\ \n \r \t \b \f
**/

function test(value){
	console.log(value);
}

test(myStr3);

// js string methods and properties
myStr1.length;
myName.slice(1,2);
myName.slice(-3,-1);
// The difference is that start and end values less than 0 are treated as 0 in substring().
myName.substring();
// The difference is that the second parameter specifies the length of the extracted part.
myName.substr();
myName.replace("e","i");
myName.toUpperCase();
myName.toLowerCase();
myName.trim();
myName.split("e");

var ourArray = [1,2,3];
ourArray.push(4);
ourArray.pop();
ourArray.unshift(0);
ourArray.shift();


var myGlobal = 10;
function func1(){
	oopsGlobal = 5;
}

function func2(){
// == === (also check the data type)
// && ||
	return typeof oopsGlobal == "undefined" ? myGlobal : oopsGlobal;
}

console.log(func2());

var fruits = "Banana";

// switch using strict check
switch(fruits) {
  case "Banana":
    console.log('banana');
    break;
  case "Apple":
    console.log('apple');
    break;
  default:
    console.log("Neither");
    break;
}

var testObj = {
  "hat":"ballcap"
}

testObj.hat;
testObj['hat'];

var hat = 'hat';
testObj[hat]

testObj.hasOwnProperty(hat);

delete testObj.hat;

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
    ]
  }
]

var firstTree = myPlants[0].list[0];

var collectionCopy = JSON.parse(JSON.stringify(firstTree));

var i = 0;
while(i<5){
  i++;
}

do{i--} while (i>0);

var myArr = [2,3,4];
for(var i = 0;i<myArr.length;i++){}

var random = Math.floor(Math.random() * 20);

console.log(Math.floor(Math.random()*10));

parseInt("4");
var convertBinToInt= "10011";
parseInt(convertBinToInt,2);

function freezeObj(){
  "use strict";
  const MATH_CONSTANTS ={
    PI:3.14
  };

  Object.freeze(MATH_CONSTANTS);

  // try{
  //   MATH_CONSTANTS.PI = 99;
  // } catch (ex){
  //   console.log(ex);
  // }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// anonymous function
var magic = function() {
  return new Date();
}

// var magic = () => {
//   return new Date();
// }

// var magic = () => new Date();

const realNumberArray = [4,5.6];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
  return squaredIntegers;
}

console.log(squareList(realNumberArray));

const increment = (function() {
  return function increment(number, value = 1){
    return number + value;
  };
})();

console.log(increment(5,2));
console.log(increment(5));


const sum = (function(){
  return function sum(x,y,z){
    const args = [x,y,z];
    return args.reduce((a,b)=> a+b,0);
  };
})();

// const sum = (function(){
//   return function sum(...args){
//     return args.reduce((a,b)=> a+b,0);
//   };
// })();

console.log(sum(1,2,3));

const arr1 = ['jan'];
let arr2;
(function(){
  arr2 = [...arr1];
  arr1[0]='potato';
})();
console.log(arr2);

var voxel = {x:1,y:2,z:3}
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x:a,y:b,z:c} = voxel;

const AVG_TEMPERATURES={
  today:77.5,
  tomorrow:79
}

function getTempOfTmrw(avgTemperatures = AVG_TEMPERATURES){
  const {tomorrow:tempOfTomorrow} = avgTemperatures;
  console.log(tempOfTomorrow);
};

getTempOfTmrw();

const LOCAL_FORECAST = {
  today: {min:72,max:83},
  tomorrow: {min:73.3,max:84.6}
}

function getMaxOfTmrw1(forecast){
  const {tomorrow:{max:maxOfTomorrow}}=forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw1(LOCAL_FORECAST));

const [g,h, , j]=[1,2,3,4,5,6];
console.log(g,h,j);

let a1=8,b1=6;
(()=>{
  [a1,b1]=[b1,a1];
})()

const source = [1,2,3,4];
function removeFirstTwo(list){
  const[, , ...arr]=list;
  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

const stats = {
  max :1,
  min:2,
  median:3
};

const half = (function(){
  return function half({max, min}){
    return (stats.max+stats.min)/2.0;
  }
})();

console.log(stats);
console.log(half(stats));

const greeting = `hello ${myName}`;  


const bicycle = {
  gear:2,
  // setGear : function(newGear){
  //   this.gear = newGear;
  // }
  setGear(newGear){
    this.gear = newGear;
  }
}

bicycle.setGear(3);
console.log(bicycle.gear);

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}

// class SpaceShuttle{
//   constructor(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
// }

var zeus = new SpaceShuttle('Jupyter');

class Book {
  constructor(author){
    this._author = author;
  }

  get writer(){
    return this._author;
  }

  set writer(updatedAuthor){
    this._author=updatedAuthor;
  }
}

function makeClass(){
  class Thermostat{
    constructor(temp){
      this._temp = 5/9*(temp-32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp=updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos =  new Thermostat(75);
let temp = thermos.temperature;
thermos.temperature=26;
temp = thermos.temperature;
console.log(temp);

import {capitalizeString} from "./string_function.js";
// import * as capitalizesStrings from ".string_function";
import substract from "./string_function.js";
const cap = capitalizeString("hello");
console.log(substract(1,2));

for(const element of [1,2,3]){
  console.log(element)
}