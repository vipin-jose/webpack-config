import "./styles/index.scss";
const chickenRecipe = {
    chicken: 1,
    chilli: 2,
    masala: 4
}

const chillyChickenRecipe = {
    ...chickenRecipe,
    soySauce: 3,
    masala: 1
}

console.log(chickenRecipe);
console.log(chillyChickenRecipe);