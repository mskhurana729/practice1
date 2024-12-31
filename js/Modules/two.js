// Now to import these variables in two.js! Remember that we can control what we import, so if we only need the greeting variable, we could just import that on its own. If another file needed the farewell variable (or both), then that file could import what it needs.

// Note that you cannot use template strings for the file path, only single or double-quoted strings.

// import { greeting, farewell } from "./one.js";

// console.log(greeting);
// console.log(farewell);

// In the above, we are not exporting an object containing greeting and farewell keys, nor are we destructuring an object with those keys when importing. We are just using named import/export syntax.

// importing default
// Remember, since we’re importing something that was default exported, we can name it whatever we want. Even though the variable was called greeting in one.js, we don’t have to call it that in two.js if we don’t want to. When default importing, we don’t use curly braces, which are for named importing.

// import helloOdonite from "./one.js";

// console.log(helloOdonite);
// console.log(farewell);
export const a = 3;
