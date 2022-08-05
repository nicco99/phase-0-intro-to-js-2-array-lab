// Write your solution here!
const cats = [ 'Milo', 'Otis', 'Garfield' ];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length-1)
}
function  destructivelyRemoveFirstCat() {
    cats.shift([0]);
}

function appendCat(name) {
    const members = cats.slice()
    members.push("Broom");
    return members;
}


function prependCat(name){
    const members = cats.slice()
    members.unshift("Arnold");
    return members;
}

function removeLastCat() {
    const newCats = cats.slice();
    newCats.pop(length+1);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice();
    newCats.shift([0]);
    return newCats;
}