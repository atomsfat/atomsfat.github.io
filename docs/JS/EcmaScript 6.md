# EcmaScript 6


**Semicolons are optional**

If you haven’t worked with JavaScript in the last few years, these three points should give you enough knowledge to feel comfortable reading the React documentation:

- We define variables with [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) statements. For the purposes of the React documentation, you can consider them equivalent to [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).
- We use the class keyword to define [JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). There are two things worth remembering about them. Firstly, unlike with objects, you *don't* need to put commas between class method definitions. Secondly, unlike many other languages with classes, in JavaScript the value of this in a method [depends on how it is called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Boxing_with_prototype_and_static_methods).
- We sometimes use => to define ["arrow functions"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). They're like regular functions, but shorter. For example, x => x * 2 is roughly equivalent to function(x) { return x * 2; }. Importantly, arrow functions [don't have their own this value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this) so they're handy when you want to preserve the this value from an outer method definition.

---

**Declaring variables**

---

```jsx
var pizza = true

const -> constante
const pizza = true

let -> lexical variable scoping (for, if )

// ES6 lexical variable scoping with let
var topic = "JavaScript"

if (topic) {
let topic = "React"
console.log('block', topic)
}

console.log('global', topic)
```

**Template String**

---

```jsx
const lastName = "Ferrell"
const middleName = "William"
const firstName = "John"

// ES6 template strings

console.log(`${lastName}, ${firstName} ${middleName}`)
```

---

**Es6 Functions**

---

**Default parameters**

```jsx
function logActivity(name="Shane McConkey", activity="skiing") {
console.log( `${name} loves ${activity}` )
}
function some(msg=‘hola’) {
console.log(" say ${msg} “)
}
```

**[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)**

---

```jsx
// allowed
item => { ... }
// allowed
(item) => { ... }
// not allowed
item, key => { ... }
// allowed
(item, key) => { ... }
```

Create functions without using function or return

If the function only had one argument we can remove arguments around the arguments

```jsx
var lordify = firstname => `${firstname} of Canterbury`
var lordify = (firstName, land) => `${firstName} of ${land}`
```

Arrow functions does’t not block ***this***

***Since arrow functions do not have their own this,  the this value of the enclosing execution context is used.***

**Destructuring** 

```jsx
var sandwitch = {
bread: "dutch crunch",
meat: "tuna"
}

var {bread, meat} = sandwitch
```

**Restructuring**

```jsx
var  {bread, meat} = sandwich
```

Is not longer necessary to use function when defining a new object

**The spread operator**

- Combine two arrays

```jsx
var some = ['cat', 'kitten', 'dog', 'puppy']
var other = ['anais', 'darwin', 'gumball']
var combine = [...some, ...other]
```

- Get some or the rest of the items of an array

```jsx
var [first, ...rest] = other
console.log('other', rest.join(','))
```

- Get arguments from function

```jsx
function directions(...args){
console.log('args', args)
}
directions('a', 'ante', 'bajo', 'cabe')
```

Also work for objects

```jsx
var morning = {
breakfast : 'huevos rancheros',
wakeup : '7 am'
}
var dinner = 'Take something'
var somethingToDo = {
...morning,
dinner
}
console.log(somethingToDo);
```

**Promises**

```jsx
const getFakeNews = count => new Promise((resolves, rejects) => {
const api = `https://api.randomuser.me/?nat=US&results=${count}`
const request = new XMLHttpRequest()
request.open('GET', api)
request.onload = () =>
(request.status === 200) ?
resolves(JSON.parse(request.response).results) :
reject(Error(request.statusText))
request.onerror = (err) => rejects(err)
request.send()
})

getFakeNews(5).then(
members => console.log(members),
err => console.error(new Error('cannot load members from randomuse'))
)
```

**Clases**

```jsx
class Vacation {
constructor(destination, lenght){
this.destination = destination
this.lenght = lenght
}
print() {
console.log(`this ${this.destination} will take ${this.lenght}`)
}
}

const travel = new Vacation('Peru', '5 years')
travel.print();

extends

constructor(destination, lenght, gear){
(destination, lenght)
this.gear = gear
}

print() {
super.print()
console.log(`gear ${this.gear}`)
}
}

const exp = new Expedition('Peru2', '2 years', 'gears')
exp.print()
```

**Init**

```jsx
// ES5
var userService = {
getUserName: function (user) {
return user.firstname + ' ' + user.lastname;
},
};

// ES6
const userService = {
getUserName(user) {
return user.firstname + ' ' + user.lastname;
},
};
```

**computed property**

```jsx
// ES5
var user = {
name: 'Robin',
};

// ES6
const key = 'name';
const user = {
[key]: 'Robin',
};
```

**Conditional**

A third option is the logical&&operator.In JavaScript atrue && 'Hello World'always evaluates to ‘Hello World’. Afalse && 'HelloWorld'always evaluates to false

A third option is the logical&&operator.In JavaScript atrue && 'Hello World'always evaluates to ‘Hello World’. Afalse && 'HelloWorld'always evaluates to false

A third option is the logical&&operator.In JavaScript atrue && 'Hello World'always evaluates to ‘Hello World’. Afalse && 'HelloWorld'always evaluates to false

[https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-)

```jsx
const result = true && 'Hello World';
console.log(result);
// output: Hello World

const result = false && 'Hello World';
console.log(result);
// output: false
```

**Modules**

**multiple exports**

```jsx
export const print( message) = > log( message, new Date())
export const log( message, timestamp) = > console.log( ` ${ timestamp.toString()}: ${ message} `}
```