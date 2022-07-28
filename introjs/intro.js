function sum(a, b) {
    return a + b;
}
let res = sum(1, 2);
console.log(res);

//funcion de primer orden es toda funcion que pueda ser tratada como una variable

const fSum = sum;
res = fSum(5, 6);
console.log(res);

//funcion de orden superior es toda funcion que puede recibir en el parametro funciones

function operation(fn, a, b) {
    console.log('se hace algo');
    console.log(fn(a, b));
}

operation(fSum, 10, 20);

//arrow function. es una forma de expresion de una función anónima(no tiene un nombre)

operation((a, b) => a * b, 5, 5);

//foreach. es un metodo inmutable. No modifica el elemento original
const names = ['Sol', 'Hector', 'Juan', 'Pablo'];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));

names.sort(); //mutable. Muta o modifica el elemento original
console.log(names);

//map. recorre todos los elementos de un array y regresa un nuevo array con valores modificados
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

//reduce un recorrido de todos los elementos pero hace un acumulado(sumatoria, contatenación de string), acumulados que se puedan hacer con dos valores y se obtiene un resultado final
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((acumulado, number) => acumulado + number, 0); // al inicio acumulado va a ser cero
console.log(total);

// Programación ORIENTADA A OBJETOS
// Clase //molde para estructurar un objeto. este objeto puede tener propiedades y metodos
// vehivulo . propiedades: puerta, asiento, metodo: encender, apagor

//ejemplo. objeto para conectarse a una bd. propiedades : usuario que se va a conectar, dode se va a conectar y metodos:conexion, desconexion

class Drink {
    constructor(name){ //se ejecuta en el momento en el que se crea un objeto
        this.name = name;
    }
    info(){
        return 'La bebida es: '+this.name;
    }
}

// funcional. toda funcion en si misma es un onjeto en javascript
function Drink2(name){
    this.name = name;
    this.info = function() {
        return 'La bebida es: '+ this.name;
    }
}

const drink = new Drink('agua');
console.log(drink.info());

const drink2 = new Drink2('agua');
console.log(drink2.info());

// herencia nos sirve para reutilizar codigo
class Beer extends Drink{
    constructor(name, alcohol){
        super(name); //llama al construtor del padre
        this.alcohol = alcohol;
    }
    info(){
        return super.info() + ' '+this.alcohol;
    }
}

const beer = new Beer('corona', 8.5);
console.log(beer.info());