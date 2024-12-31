// To export something as a named export, we can either stick the export keyword in front of its declaration, or add an export { } somewhere in the file (typically the end), where the curly braces contain a list of the names of the things to export.

// export const greeting = "Hello Odinate";
// export const farewell = "Bye Bye Odinate";
//  or
// const greeting = "Hello Odinate";
// const farewell = "Bye Bye Odinate";

// export { greeting, farewell };

// In contrast to named exports, a file can only default export a single thing. Something exported this way does not have a name attached to it, so when you import it somewhere, you can decide what name to give it.

// To export something from a file as a default export, we can also do it inline by prepending export default to the appropriate declaration, or we can export it at the end of the file, this time without any curly braces. Again, either way is perfectly fine. Note that if you want to inline default export a variable, the default keyword replaces the variable declaration so you export the expression directly.

// // export default "Hello , Odinite!";

// // Or on a separate line:

// const greeting = "Hello odonite";
// // export default greeting;n
// export { greeting as default };

// export const farewell = "Bye bye, odonite";

// // export feature declared elsewhere as default
// export { myFunction as default };
// // This is equivalent to:
// export default myFunction;

// // export individual features as default
// export default function () { /* … */ }
// export default class { /* … */ }

export const a = 1;
