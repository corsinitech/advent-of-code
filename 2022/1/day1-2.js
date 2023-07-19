const fs = require('fs');

let bigDictElves = {};
let sortedElvesByCalorie = [];

let calorieInventory = fs.readFileSync('./input.txt').toString().split('\n');

console.log(calorieInventory);

function elfDictInitializer() {
    elfIndex = 0;
    for (let i = 0; i < calorieInventory.length; i++) {
        console.log('Current item: ' + calorieInventory[i]);
        if (calorieInventory[i] == '') {
            console.log('Adding elf number ' + (elfIndex + 1) + ' to object...');
            bigDictElves[`elf${elfIndex + 1}`] = 0;
            elfIndex += 1;
        }
    }
}

function calorieCalculation() {
    elfIndex = 0;
    for (let i = 0; i < calorieInventory.length; i++) {
        if (calorieInventory[i] !== '') {
            bigDictElves[`elf${elfIndex + 1}`] += parseInt(calorieInventory[i]);
        } else {
            elfIndex += 1;
        }
    }
}

function sortElves() {
    let items = Object.keys(bigDictElves).map(function(key) {
        return [key, bigDictElves[key]];
    });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    return items.slice(0, 5);
}

elfDictInitializer();
calorieCalculation();
sortedElvesByCalorie = sortElves();

let total = sortedElvesByCalorie[0][1] + sortedElvesByCalorie[1][1] + sortedElvesByCalorie[2][1];
console.log(sortedElvesByCalorie);
console.log(total);
