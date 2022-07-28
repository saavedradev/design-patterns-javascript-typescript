interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    public getDetail(): string{
        return `${this.name}`;
    }
}

// abstract esta clase solo sirve para heredar. No va a poder crear un objeto ProductDecorator directamente. de los hijos que hereden si se va a poder
//decorator es como una envoltura o bolsa
abstract class ProductDecorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }
    public getDetail(): string{
        return this.component.getDetail();
    }
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator{
    private tradename : string;
    private brand: string;
    constructor(component: Component, tradename: string, brand: string){
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }
    public getDetail(): string{
        return `${this.tradename} ${this.brand}` + super.getDetail();
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent('cerveza');
console.log(productComponent.getDetail());