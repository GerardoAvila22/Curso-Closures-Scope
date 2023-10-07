/* ================= Playground: Closure para Almacenar Datos de Mascotas ================= */

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
