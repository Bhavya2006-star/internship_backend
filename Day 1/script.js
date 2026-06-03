// Practice Question 1
// Even or Odd

const output = document.getElementById("output");
function show(message) {
    output.innerHTML += message + "<br>";
}

let num = 10;

if (num % 2 === 0) {
    show("Even Number");
} else {
    show("Odd Number");
}


// Practice Question 2
// Voting Eligibility

let age = 18;

if (age >= 18) {
    show("Eligible to Vote");
} else {
    show("Not Eligible to Vote");
}


// Practice Question 3
// Largest Among Two Numbers

let a = 20;
let b = 15;

if (a > b) {
    show(a + " is Largest");
} else {
    show(b + " is Largest");
}


// Practice Question 4
// Largest Among Three Numbers

let x = 10;
let y = 25;
let z = 15;

if (x >= y && x >= z) {
    show(x + " is Largest");
} else if (y >= x && y >= z) {
    show(y + " is Largest");
} else {
    show(z + " is Largest");
}


// Task 1
// User Registration Validation

let username = "Bhavya";
let email = "bhavya@gmail.com";
let password = "password123";

if (username === "") {
    show("Invalid Username");
} else if (password.length < 8) {
    show("Password Too Short");
} else {
    show("Registration Successful");
}


// Task 2
// Login Authentication

const savedEmail = "admin@gmail.com";
const savedPassword = "admin123";

const emailLogin = "admin@gmail.com";
const passwordLogin = "admin123";

if (
    emailLogin === savedEmail &&
    passwordLogin === savedPassword
) {
    show("Login Successful");
} else {
    show("Invalid Credentials");
}