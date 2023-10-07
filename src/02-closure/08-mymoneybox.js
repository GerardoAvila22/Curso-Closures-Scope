/* ==================== Practicando Closures ==================== */

/* ==== No se almacena los datos cada vez que llamamos a la funcion ==== */
/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money: $${saveCoins}`);
}

moneyBox(5);
moneyBox(15);
moneyBox(25);
*/

/*
closure es una función que guarda referencias del estado adyacente (ámbito léxico). 
En otras palabras, una clausura permite acceder al ámbito de una función exterior 
desde una función interior. 
*/

/* ====== Closures ====== */
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Money: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(25);