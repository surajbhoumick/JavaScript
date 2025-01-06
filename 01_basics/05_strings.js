const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Old and not used any more

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //This is the new method and its easily changable

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  //Removing empty spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  //Checking if it is included in string or not

console.log(gameName.split('-'));  //Changing the string to Array