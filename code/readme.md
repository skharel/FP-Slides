This code is part of live coding I did for functional programming in JS presentation. The purpose of this code is to start with imperative solution and refine on it to build functional solution

# Problem

Suppose you have some API that returns some data which might be JSON or stringified JSON

1. log the JSON data from API
2. pick given attributes
3. Log the new output
4. return result

## 1.js

- Imperative solution
- Uses `forEach` to compute & store result

## 2.js

- Imperative solution
- Uses `reduce` API to compute the result
- Better then `1.js` but we can do better then `2.js`

## 3.js

- Still an imperative solution
- Uses function to abstract way logging and computation of result

## 4.js

- Builds on by making uses of the function's we built in 3.js
- Uses pipe to build data flow
- Within the pipe functions are referenced and making it read like high level instuction of what you want to do; your code is getting declarative here

## 5.js

- Almost similar as 4.js but the API here is async
- Shows multiple solutions of how to compose and build pipeline for data flow
