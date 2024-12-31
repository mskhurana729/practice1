// import * as ns from "./script.js";

// import { a } from "./script.js";

// console.log(a);

// There is also export * from "mod", although there's no import * from "mod". This re-exports all named exports from mod as the named exports of the current module, but the default export of mod is not re-exported. If there are two wildcard exports statements that implicitly re-export the same name, neither one is re-exported.

// Attempting to import the duplicate name directly will throw an error.

// Namespace import
// The following code inserts myModule into the current scope, containing all the exports from the module located at /modules/my-module.js.

// js
// Copy to Clipboard
// import * as myModule from "/modules/my-module.js";
// Here, myModule represents a namespace object which contains all exports as properties. For example, if the module imported above includes an export doAllTheAmazingThings(), you would call it like this:

// js
// Copy to Clipboard
// myModule.doAllTheAmazingThings();
