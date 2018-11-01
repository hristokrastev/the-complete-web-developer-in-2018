// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart('9')
rabbit = rabbit.padStart('9')

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

добавя такива параметри, като не трие самата стойност, и ако е по-голяма от стойността ги добавя отзад при .padEnd


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'

Object.entries(obj).map(value =>
	return ${value[0]} ${value[1]}
)
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(' ')).join(' ');


let unRendered = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let unRendered = unRendered.sort();

let rendered = unRendered.map(value => value.join(' '))