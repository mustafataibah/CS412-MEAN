// Problem Set 2
// Problem 2 (PS2.P2.js)
//Write a generator that is initialized with a sentence and that emits each word of the sentence in turn.
// Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”. Hint: Splitting a string returns an Array

function* wordsGenerator(sentence) {
    let words = sentence.split(' ');
    for (let word of words) {
        yield word;
    }
}

let sentence = "All I know is something like a bird within her sang";
let words = wordsGenerator(sentence);
let nextWord = words.next();
while (!nextWord.done) {
    console.log(nextWord.value);
    nextWord = words.next();
}
