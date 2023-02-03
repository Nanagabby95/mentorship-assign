// 1 WRITE A FUNCTION THAT TAKES AN INTEGER MINUTES AND CONVERTS IT TO SECONDS.
let minutes =Number(prompt('input your minute'));
function conversion() {
    return minutes * 60 +"secs";
}
alert(conversion());

// 2) Write a function that takes the base and height of a triangle and return its area. 

let theBase =parseInt(prompt('input the base of a triangle:'));
let theHeight =parseInt(prompt('input the height of a triangle:'));

function areaValue(a, b) {
   return theBase * theHeight /2 + 'area';
}
alert(areaValue());


// 3) CREATE A FUNCTION THAT TAKES THE AGE IN YEARS AND RETURNS THE AGE IN DAYS..
N:b  
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

var age =parseInt(prompt('Input your age'));
var yearLength=356;

function inDays(a,b) { 
    return yearLength/age +'days';
}
alert(parseFloat(inDays()));



// 4  Write a function to reverse an array.

// Eg 
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
 
 const MyLuckyNums=[22, 5,1,95];

 function arrReverse(arrays) {
    return arrays
 }
 alert(MyLuckyNums.reverse());

// 5 Create a function that accepts an array and returns the last item in the array.

var arrItems=['icecream', 'banana', 'pizza', 'smoothie'];
 function lastItem(arr) {
    return arr[arr.length-1];
 }
 alert(lastItem(arrItems));


 // 6 Create a function that takes a number as its only argument and returns true 
// if it's less than or equal to zero, otherwise return false.

var num = Number(prompt('input your number'));

function myNum(num){
if (num<=0){
    return true;
}
else{
    return false;
}
}
alert(myNum(num));
 


// 7 A bartender is writing a simple program to determine whether he should serve drinks to someone.
//  He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, 
// create a function which returns whether he should serve drinks.

// Eg 
// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false


var eligibleAge = Number(prompt('Input your age'));
 function ageCheck() {
    var breaktime= new Date();
    var breaktime=(breaktime.getHours());
    console.log(breaktime);
   if (eligibleAge<18){
    alert('You are not eligible to drink');
   } 
        if (breaktime<12) {
            alert('true');
        }
else if (eligibleAge>18){
        alert(`You are eligible to drink`);
    }
 }
 alert(ageCheck());