// builder crea un objeto con distintas presentaciones que son complejas

import { Persona } from "./Person";
import { PersonDirector } from "./personDirector";
import { PersonBuilder } from "./PersonInterface";

class NormalPersonBuilder implements PersonBuilder {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor() {
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }
    reset(): void {
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }
    setName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }
    setLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }
    setCountry(country: string): PersonBuilder {
        this.country = country;
        return this;
    }
    setCity(city: string): PersonBuilder {
        this.city = city;
        return this;
    }

    addHobby(hobby: string): PersonBuilder {
        this.hobbies.push(hobby)
        return this;
    }

    build(): Persona {
        const person = new Persona(
            this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }
}

// creacion 1
const personBuilder = new NormalPersonBuilder();

const eduardo = personBuilder.setName('Eduardo')
    .setLastName('Saavedra')
    .addHobby('Comer')
    .addHobby('Dormir')
    .build();
console.log(eduardo);
const juan = personBuilder.setName('Juan')
    .addHobby('Tomar cerveza')
    .setAge(20)
    .build();
console.log(juan);

// creacion con director
const director = new PersonDirector(personBuilder);
director.createSimplePerson('Luis', 'zapata');
const luis = personBuilder.build();
console.log(luis)