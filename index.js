// Write your code in this file!
let currentUser = "James";
let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
// let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser + "!";
let excitedWelcomeMessage = welcomeMessage.toUpperCase();
// let shortGreeting = "Welcome, " + currentUser + "!";
let shortGreeting = welcomeMessage.slice(0,7) +", " + currentUser[0] + "!";
console.log(shortGreeting);
