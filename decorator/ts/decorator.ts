//decorator resuelve la herencia multiple
interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getDetail(): string {
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
    public getDetail(): string {
        return this.component.getDetail();
    }
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;
    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }
    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}
// decorator 2
class StoreProductDecorator extends ProductDecorator {
    private price: number;
    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }
    public getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }

}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
    public getDetail(): string {
        return `<h1>Inforrmación del producto</h1>
            <p>
                ${super.getDetail()}
            </p>
        `;
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent('cerveza');
console.log(productComponent.getDetail());

//decorator 1 con component
const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, 'London porter', 'Fuller s');
console.log(comercialInfoProduct.getDetail());

//decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

//decorator 2 con decorator 1 
const storeProduct2 = new StoreProductDecorator(comercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

// decorator 3 con decorator 2 con decorator 1 con componente
const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());