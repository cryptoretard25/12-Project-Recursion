const { log } = console;
/*
Assignment 1
1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

2. Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

Fill the array
let arr = Array.from({length: n}, (_, n)=> n+1)
*/

//1.

function fib(n) {
  let arr = [0, 1, 1];
  if (n < 3) return arr;
  else {
    for (let i = 3; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

console.log(fib(5));

function fibRec(n) {
  if (n == 2 || n == 1) return 1;
  //log(`fib(${n}) = fib(${n - 1}) + fib(${n - 2}); ${fibRec(n-1)} + ${fibRec(n-2)} = ${fibRec(n-1) + fibRec(n-2)}`);
  return fibRec(n - 1) + fibRec(n - 2);
}

function fibonacci(n, arr = [0, 1]) {
  if (arr.length >= n) return arr;
  return fibonacci(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
}

console.log("result:", fibRec(5));
console.log("result:", fibonacci(9));

