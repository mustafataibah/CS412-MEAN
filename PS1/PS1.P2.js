//Problem Set 1
//Problem 2 (PS1.P2.js) 
//Write a function that takes as its input the following formatted strings:
// ‘4+2', ‘5*7’, ‘6-1’, ‘9/2’, ‘2^8’ 
// Determine the operator (+, *, -, ^, or /) embedded in the string
// Return a function to implement the input operator that returns the result
// Write a helper function to parse the expression that uses
// destructuring to assign values to left and right.

const evaluate = expression => {
    // destructuring assignment to split expression into left, operator and right
    let [left, operator, right] = expression.split('');

    left = parseInt(left);
    right = parseInt(right);

    // return corresponding operation
    switch (operator) {
        case '+':
            return () => left + right;
        case '-':
            return () => left - right;
        case '*':
            return () => left * right;
        case '/':
            return () => left / right;
        case '^':
            return () => Math.pow(left, right);
        default:
            return () => "Invalid operator";
    }
};

const expressions = ['4+2', '5*7', '6-1', '9/2', '2^8'];
expressions.forEach(expression => {
    let operator = evaluate(expression);
    console.log(`${expression} = ${operator()}`);
});
