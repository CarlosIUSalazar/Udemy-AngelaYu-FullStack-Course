const superheroes = require('superheroes');
const supervillains = require('supervillains');

let mySuperheroName = superheroes.random();

let heroesList = [];
for (let i = 0; i <= 1000000; i++){
    heroesList.push(supervillains.random())
}

let heroToCheck = heroesList[1];
let index = 0
for (let i = 1; i <= heroesList.length; i++){
    if (heroToCheck === heroesList[i]){
        index++
    }
}

console.table(heroesList);
console.log(heroToCheck + " Appeared " + index + " Times");
