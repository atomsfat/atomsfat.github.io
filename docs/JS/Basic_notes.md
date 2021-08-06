# Basic Notes


Semicolons

[http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)

**The Rules**

In general, \n ends a statement unless:

1. The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with . or ,.)
2. The line is -- or ++ (in which case it will decrement/increment the next token.)
3. It is a for(), while(), do, if(), or else, and there is no {
4. The next line starts with [, (, +, *, /, -, ,, ., or some other binary operator that can only be found between two tokens in a single expression.

Objects

- Attributes could be anything
- Constructors

Important functions:

**call** -> calls a function accepts an argument list **fun.call(this, arg1, arg2)**

**apply** -> calls a function accepts a single array of arguments **fun.apply(this, [argsArray])**

**bind**  -> creates a new function bind a particular this value **retrieveX.bind(module)**

Use strict

'use strict';

hoisted

hoisted

React [https://survivejs.com/react/introduction/](https://survivejs.com/react/introduction/) Book