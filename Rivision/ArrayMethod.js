let map = ["strkjk", "ryty", "tyuty", "hunhj"];
let arr = [1, 2, 3, 4, 5];

//toString():
let ans = map.toString();

//typeOf():
let typeStr = typeof arr;
console.log(typeStr);

//Shift()
console.log(map.shift());

//pop()
console.log(map.pop());

//unshift()
console.log(map.unshift("ghk"));

//push()
console.log(map.push("tyee"));

//concat()
console.log(map.concat(arr));

//flat()
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

//splice()
let spliceArr = map.splice(2, 1, "rty");
console.log(spliceArr);
