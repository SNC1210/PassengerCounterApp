// document.getElementById('count').innerText=5;

// Challenge-1
/* // 1. Create a variable, myAge, and set its value to your age
                let myAge=23;
                console.log(myAge);
// 2. Log the myAge variable to the console */
/*
// Error-1
// !ReferenceError: Cannot access 'myAge' before initialization
console.log(myAge);
let myAge=23;
*/

/*
// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

*/
/*
// cahllenge-2
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
1human year= 7 dog year
let myAge=23;
let humanDogRatio=7;
let myDogAge=myAge*humanDogRatio;
console.log(myDogAge);

*/

/*//reassigning and incrementing

reassigning

let count = 5

// count + 1
count = 3//reassign
count=5//reassign
count = 1//reassign


//count+1

count=count+1;//incrementing
count=count+10;//incrementing
count =coount-13;//decremnting
console.log(count)

Challenge-4
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step



let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)

*/


//After Declaring the button increment
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/*
//Before Doing Algo into code

USe Function To writr less code

scenario:-
// Setting up the the race 🏎 🏎 🏎

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)


the above snippet tells the that same particular code for countdown is running every time the race starts...

so better option in the thought is to make declare and define in one place and when there is need of starting the race jsut call that defined snippet.


function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()



*/


/*//Challenge
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function


function displayData(){
    console.log(42);
}

displayData();

*/

/*
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
   function sum(num1,num2,num3){
        return num1+num2+num3;
   }

   console.log(sum(lap1,lap2,lap3));


   1st way

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLapTime()

2nd way

 console.log(lap1 + lap2 + lap3);//directly do this
*/


/*
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
*/


/*

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

*/
/*
//code for thre given question

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
*/
/*
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}


*/
/*let username = "per";
console.log(username);


// Create a variable, message, that stores the string: "You have tree new notifications"
let message="You have tree new notification";
console.log(message);

//
let username = "per"
let message = "You have tree new notifications"

console.log(message + ", " + username + "!")

// Create a variable, messageToUser, that contains the message we have logged
let username = "per"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

// Create a variable, messageToUser, that contains the message we have logged
*/

/*
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console


let name='suryanarayan chandrakar';
let greeting="Hi ,My Name is";
let myGreeting=greeting +" " +name;
console.log(myGreeting);
*/

/*
// string vs numbers
let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"
*/

/*
// Challenge
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
 
let welcomeEl=document.getElementById('elcome-el');
let name="suryanarayan";
let greeting="Hi ,my name is";
let message=greeting + name;
welcomeEl.innerText=message;

*/

/*
let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"
*/
/*
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}

*/
/*
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

// Google:
// innerText alternative mdn is textContent is better in computation
*/


//final snnipett
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

