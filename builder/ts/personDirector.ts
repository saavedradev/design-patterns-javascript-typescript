import { PersonBuilder } from "./PersonInterface";

export class PersonDirector{
    private personBuilder : PersonBuilder;
    constructor(personBuilder: PersonBuilder){
        this.personBuilder = personBuilder;
    }
    setPersonBuilder(personBuilder: PersonBuilder){
        this.personBuilder = personBuilder;
    }
    createSimplePerson(name: string, lastName: string){
        this.personBuilder.setName(name);
        this.personBuilder.setLastName(lastName);
    }
}