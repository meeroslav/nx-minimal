import {createBread} from "../ingredients/bread/index.js";
import {createBacon} from "../ingredients/bacon/index.js";
import {createLettuce} from "../ingredients/lettuce/index.js";
import {createTomato} from "../ingredients/tomato/index.js";

export function createSandwich() {
    const sandwich = document.createElement('div');
    sandwich.id = 'sandwich';

    sandwich.appendChild(createBread());
    sandwich.appendChild(createBacon());
    sandwich.appendChild(createTomato());
    sandwich.appendChild(createLettuce());
    sandwich.appendChild(createBread());

    return sandwich;
}
