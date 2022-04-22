const { join } = require('path');

function generateIngredient(tree, { name, color, thickness }) {
    const root = join('ingredients', name);
    name = name.charAt(0).toUpperCase() + name.slice(1)
    tree.write(join(root, 'project.json'), JSON.stringify({
        root
    }, null, 2));

    tree.write(join(root, 'index.js'), `
    import { createIngredient } from '../create-ingredient/index.js';
    
    export const create${name} = () => createIngredient(${thickness}, '${color}');
    `);
}

module.exports = generateIngredient;
