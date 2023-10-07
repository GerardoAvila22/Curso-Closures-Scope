/* ================= Playground: Crea un Closure para Sumar ================= */
function sumWithClosure(firstNum = 0) {

    function sum(secondNum = 0) {
        return firstNum + secondNum;
    }
    return sum;
}

console.log(sumWithClosure(3)(2));

function myFunction1(num1) {
    let a = num1;
    console.log(a);
    function myFunction2(num2) {
        let b = num2;
        console.log(b);
        function myFunction3() {

        }
    }
    return myFunction2;
}

myFunction1(2);
