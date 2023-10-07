/* =========== hoisting =========== */
/* hoisting en variables */
console.log(nameDog);

var nameDog = 'Elmo';

console.log(nameDog);


/* =========== hoisting enfunciones =========== */
//var coco;  undefined
nameCat();

function nameCat(){
    console.log(`El mejor gatito es ${coco}`);
}

var coco = 'COCO';