# Text-word-count

It is a very simple library to count the words of a text, with the condition that the words are greater than two characters, for this last there is a variable that can be changed if necessary, it is also caseensitive and in the same way it can be change if necessary

The purpose of this library is to practice how to create a library, feel free to use it if you find it useful or to improve it.

## How to use?

```javascript
const wordsCount = require('text-word-count')

wordsCount.wordsCount('Hey, I`m an incredible library to do a very, very, very simple thing, tell the words of a text.')

// Result

// { hey: 1,
//   an: 1,
//   incredible: 1,
//   bookstore: 1,
//   to: 1,
//   do: 1,
//   very: 3,
//   simple: 1,
//   thing: 1,
//   tell: 1,
//   the: 1,
//   words: 1,
//   of: 1,
//   text: 1 }

```