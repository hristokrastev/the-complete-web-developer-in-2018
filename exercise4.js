//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const sum = (first, second) => first + second;


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
13

const addTO = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
31

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(5)

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
17

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add10 = curriedSum(10)
add10(10)


//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
16

const compose = (f, g) => (a) => f(g(a))
const add5 = (num) => num + 5
const add10 = (num) => num + 10
compose(add5, add10)(10)

//What are the two elements of a pure function?
//no side effects and aways the return vlue is the same.
//Deterministic
//