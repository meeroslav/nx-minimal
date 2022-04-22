export function createIngredient(thickness, color) {
    const ingredient = document.createElement('div');
    ingredient.classList.add('ingredient');
    ingredient.style.height = thickness + 'px';
    ingredient.style.background = color;
    return ingredient;
}
