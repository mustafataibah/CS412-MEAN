//Problem Set 1
//Problem 3 (PS1.P3.js)
//
// Write a function that accepts two input parameters: a string, and a decorator function. The
// function should execute the passed decorator function on the passed string and return the result.
//
// Next, write two expressions that call this function. For the first, pass the string
// ‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
// containing fragments of the input string broken on the character ‘c’. For the input string
// ‘supercalifragilisticexpialidocious’, you should get
// [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
//
// For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
// function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
// contains the original string, the modified string, the total number of As in the modified string,
// and the overall length of the modified string:
// {
// 	 	 originalString: xxx,
// 	 	 modifiedString: xxx,
// 	 	 numberReplaced: xxx,
// 	 	 length:		 	 xxx,
// }
// Print the data from the returned object on the console 

const modifyString = (str, decoratorFunction) => decoratorFunction(str);

// First expression
let fragments = modifyString('supercalifragilisticexpialidocious', str => 
    str.replace(/c/g, ' c').split(' ').filter(fragment => fragment !== '')
);
console.log(fragments);


// Second expression
let modified = modifyString('supercalifragilisticexpialidocious', str => {
    let originalString = str;
    let modifiedString = str.replace(/a/g, 'A');
    let numberReplaced = (modifiedString.match(/A/g) || []).length;
    let length = modifiedString.length;
    return {
        originalString,
        modifiedString,
        numberReplaced,
        length
    };
});
console.table(modified);
