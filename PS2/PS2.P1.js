// Problem Set 2
// Problem 1 (PS2.P1.js)
// Write two generators that together implement a series of even Fibonacci numbers. The first
// generator should return the series of fibonacci numbers starting from 0. The series F is defined
// as
// F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
// The second generator should use the first to obtain the next number in the sequence, rejecting
// it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
// Use the generators to print out the first 6 even Fibonacci numbers.

// First Generator: Fibonacci numbers generator
function* fibonacciNumbers() {
    let a = 0, b = 1;
    while (true) { // This will generate Fibonacci numbers indefinitely
        yield a;
        [a, b] = [b, a + b];
    }
}

// Second Generator: Even Fibonacci numbers generator
function* evenFibonacciNumbers() {
    let sequence = fibonacciNumbers();
    for (let n of sequence) {
        if (n % 2 === 0) { // If the number is even, then yield it
            yield n;
        }
    }
}

let sequence = evenFibonacciNumbers();
for (let i = 0; i < 6; i++) {
    console.log(sequence.next().value);
}
