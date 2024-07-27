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
        this._entries = [];
    }

    get size() {
        return this._entries.length;
    }

    set(key, value) {
        const index = this._entries.findIndex(entry => entry[0] === key);
        if (index === -1) {
            this._entries.push([key, value]);
        } else {
            this._entries[index][1] = value;
        }
    }

    get(key) {
        const entry = this._entries.find(entry => entry[0] === key);
        return entry ? entry[1] : undefined;
    }

    has(key) {
        return this._entries.some(entry => entry[0] === key);
    }

    delete(key) {
        const index = this._entries.findIndex(entry => entry[0] === key);
        if (index !== -1) {
            this._entries.splice(index, 1);
            return true;
        }
        return false;
    }

    clear() {
        this._entries = [];
    }

    forEach(callbackFn, thisArg) {
        for (const [key, value] of this._entries) {
            callbackFn.call(thisArg, value, key, this);
        }
    }

    *keys() {
        for (const [key] of this._entries) {
            yield key;
        }
    }

    *values() {
        for (const [, value] of this._entries) {
            yield value;
        }
    }

    *entries() {
        for (const entry of this._entries) {
            yield entry;
        }
    }

    [Symbol.iterator]() {
        return this.entries();
    }
}
