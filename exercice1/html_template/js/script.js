function askName() {
  let person = prompt("what's your name?", "enter your name"); // a window open to ask the name of the person;
  let welcomeMessage = "Hi " + person;
  document.body.innerHTML += `<h2> ${welcomeMessage} </h2>`;
}

askName();

let birthYear = parseInt(prompt("what is your birth year?", "enter your birth year"));
let birthMonth = parseInt(prompt("what is your birth month?", "enter your birth month"));
let currentMonth = new Date().getMonth() + 1; // find the current month and adding 1 because the index start at 0

function calculateAge() {
  let year = new Date().getFullYear(); //find the current year
  let age = year - birthYear; // calculate the age (annee actuelle - annee de naissance)
  return age
}

function yourBirthday() {
  if (currentMonth>birthMonth) {
    return calculateAge ();
  } else {
    return calculateAge ()-1
  }
}

let messageAge = "You are " + yourBirthday() + " years";
document.body.innerHTML += `<h3> ${messageAge} </h3>`
