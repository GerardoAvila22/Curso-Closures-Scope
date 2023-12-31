## **Playground: Closure para Almacenar Datos de Mascotas**

En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

**Input:**

```jsx
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
```

**Output:**

```jsx
["michi", "firulais"]
```

**Solucion**

```jsx
/* ===== solicion 1 ===== */
function createPetList() {
    let petList = [];
    console.log(petList);

    function almacenado(pet){
        if(pet === undefined) {
            return petList;
        }else{
            petList.push(pet);
        }
    }

    return almacenado;
}

const list = createPetList();

list("Loro");

/* ===== solicion 2 ===== */

function createPetList() {
    let petList = [];

    return (pet) => pet? petList.push(pet) :  console.log(petList);
} 

const list2 = createPetList();

list2();
```

[(INDICE)](../README.md)
