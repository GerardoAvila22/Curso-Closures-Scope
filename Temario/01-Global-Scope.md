## **Global Scope**

### ¿Qué es el Scope?

> El scope es el alcance que determina la accesibilidad de las variables, objetos y funciones desde diferentes partes del código.
> 

<aside>
💡 Debes saber que en JavaScript, los objetos y las funciones también son variables.

</aside>

Contexto en el que los valores y expresiones son **visibles** o pueden ser referenciados.

Del scope derivan diferentes tipos:

- Global Scope.
- Function Scope.
- Block Scope.

### Global Scope

> El **global scope** es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.
> 

Son aquellas que se encuentran declaradas fuera de los bloques de código o funciones.

```jsx
var fruit = "Apple"; // Variable global

function bestFruit() {
	console.log(fruit);
}

bestFruit();
```

`fruit` no estaba definida en la función `bestFruit()` sin embargo pudo ser utilizada ya que fruit fue declarada globalmente.

Otra forma de declarar globalmente que puede pasar desapercibido es esta.

```jsx
function countries() {
	country = "Colombia"; // Variable global
	console.log(country);
}

countries();

console.log(country); // "Colombia"
```

Esto ocurre por no declarar la variable con var, let o const. Lo que permite utilizar la variable desde fuera de la función.

[(INDICE)](../README.md)
