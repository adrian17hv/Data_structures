
/* -------------  SET  ------------- */

// Un set es un pool de elementos desordenados, por ende no tenemos index para acceder a un elemento especifico dentro del set
// importante remarcar que no va a guardar elementos repetidos

const myArray = [1,2,3,4,5]
const mySet = new Set(myArray) // util cuando tengo que eliminar todos los valores duplicados o repetidos

console.log(myArray)
console.log(mySet)

const uniqueArray = [...mySet]

console.log(uniqueArray)

/*     ------       SET METHODS      -----        */

mySet.add(6); // agregar 1 elemento al set, puede ser un array, un objeto, o cualquier data type
mySet.delete(3); // elimina el elemento pasado por parametro del set
mySet.clear(); // no acpeta parametros, limpia el set por completo
mySet.has(5); // si el set contiene el elemento que se paso por parametro, devuelve boolean
mySet.size() // devuelve el numero de elementos dentro del set


class MySet {
    constructor() {
        // Inicializar la estructura interna de almacenamiento.
    }

    // Método para obtener el tamaño del set.
    get size() {
        // Retornar el número de valores en el set.
    }

    // Método para añadir un valor al set.
    add(value) {
        // Añadir el valor al set.
    }

    // Método para comprobar si un valor está en el set.
    has(value) {
        // Retornar verdadero si el valor está en el set, falso en caso contrario.
    }

    // Método para eliminar un valor del set.
    delete(value) {
        // Eliminar el valor del set.
    }

    // Método para eliminar todos los valores del set.
    clear() {
        // Eliminar todos los valores del set.
    }

    // Método para iterar sobre cada valor en el set.
    forEach(callbackFn, thisArg) {
        // Iterar sobre cada valor y llamar al callback con cada valor.
    }

    // Método para obtener un iterador de los valores en el set.
    values() {
        // Retornar un iterador de los valores.
    }

    // Alias para el método values.
    keys() {

    }

    // Método para obtener un iterador de los valores en el set.
    entries() {
        // Retornar un iterador de pares [valor, valor].
    }
}