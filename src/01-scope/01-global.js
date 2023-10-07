/*=======Variables=======*/

var a; //declarmos
var b = 'B'; // declaramos / asignamos
b = 'BB'; //reasignamos un valor
var a = 'aa'; // redeclaracion


/*=======Global Scope=======*/
var fruit = 'Apple'; // global

function bestfruit() {
    const alcance = 'solo dentro del scope';
    console.log(alcance);
    console.log(fruit);
}

console.log(alcance); //Nos dara error ya que su alcance esta limitado
console.log(fruit);

bestfruit();



