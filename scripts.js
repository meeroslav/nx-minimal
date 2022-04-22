
import { createSandwich } from "./sandwich/index.js";

const sandwich = createSandwich();

console.log({ sandwich });

document.body.appendChild(sandwich);
