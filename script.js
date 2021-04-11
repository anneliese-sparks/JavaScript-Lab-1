const name = "Anneliese Sparks";
const age = "29";
const birthday = "August 16";
let detroitGC = Boolean(true);
const lifeEvents = ["I have lived in 5 different states", "I have a background in digital marketing",
"I'm an older sister to my younger brother", "I will be a graduate of the front-end bootcamp soon!"]

if (detroitGC === true) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);

} else if (detroitGC === false) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
    }

for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to reach the number 5.`);
    break;
  }
}
