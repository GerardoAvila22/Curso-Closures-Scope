## **Playground: Crea un Closure para Sumar**

En este desafío recibirás dos números aleatorios por parámetros.

Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

**Input:**

```jsx
sumWithClosure(2)(3);
```

**Output:**

```jsx
5
```

**Input:**

```jsx
sumWithClosure(90)();
```

**Output:**

```jsx
90
```

**Solucion**

```jsx
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
```
[(INDICE)](../README.md)
