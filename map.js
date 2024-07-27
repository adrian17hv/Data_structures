/*  ---------- MAP  ----------- */

// El objeto map contiene pares key-value y recuerda el orden de la insercion de la key
// Permite mapear valores arbitrarios a otros valores
// podemos usar objects como keys


const myMap = new Map([['name','adrian'],['surname', 'villalba']])

console.log(myMap)


// recordar que los objects en JS solo soportan un key object, si agregamos multiples key objects, solo recuerda el ultimo
const myObject = {};

const a = {};
const b = {};

myObject[a] = 'a'; // este primer objecto va a ser sobreescrito por el segundo
myObject[b] = 'b';

// lo podemos resolver utilizando un map para que nos recuerde ambos objects

const c = {};
const d = {};

const myMapp = new Map([[c, 'c'],[d, 'd']])

console.log(myMapp)

/*  --------------- MAP METHODS ---------------- */

myMapp.set({},'e') // agrega un par key value, con un object como key al map
myMapp.delete(c) // borra por key especifica
myMapp.has() // busca por key, no por value
myMapp.size() // .length del map

console.log(myMapp)

class MyMap {
    constructor() {
        // Inicializar la estructura interna de almacenamiento.
    }

    // Método para obtener el tamaño del mapa.
    get size() {
        // Retornar el número de pares clave-valor.
    }

    // Método para añadir un nuevo par clave-valor.
    set(key, value) {
        // Añadir el par clave-valor al mapa.
    }

    // Método para obtener el valor asociado a una clave.
    get(key) {
        // Retornar el valor asociado a la clave.
    }

    // Método para comprobar si una clave está en el mapa.
    has(key) {
        // Retornar verdadero si la clave está en el mapa, falso en caso contrario.
    }

    // Método para eliminar un par clave-valor del mapa.
    delete(key) {
        // Eliminar el par clave-valor asociado a la clave.
    }

    // Método para eliminar todos los pares clave-valor del mapa.
    clear() {
        // Eliminar todos los pares clave-valor del mapa.
    }

    // Método para iterar sobre cada par clave-valor en el mapa.
    forEach(callbackFn, thisArg) {
        // Iterar sobre cada par clave-valor y llamar al callback con cada par.
    }

    // Método para obtener un iterador de las claves en el mapa.
    keys() {
        // Retornar un iterador de las claves.
    }

    // Método para obtener un iterador de los valores en el mapa.
    values() {
        // Retornar un iterador de los valores.
    }

    // Método para obtener un iterador de los pares clave-valor en el mapa.
    entries() {
        // Retornar un iterador de los pares clave-valor.
    }

    // Método para obtener el objeto iterador por defecto.
    [Symbol.iterator]() {
        // Retornar el iterador de pares clave-valor.
    }
}
