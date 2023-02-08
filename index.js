// Code your solutions in this file
const people = ["Guadalupe", "Ollie", "Aki"];
const message = []

function writeCards(people) {
  for (let i = 0; i < people.length; i++) {
    message.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
    debugger;
  }

  return message;
}

// writeCards(people);


let number = 11;
function countDown(number){
while (number >= 0) {
  console.log(number--);
}
  return number
  debugger;
}