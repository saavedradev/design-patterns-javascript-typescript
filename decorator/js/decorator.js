// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }
    getDetail() {
        return `${this.name}`;
    }
}

//decorator
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }
    getDetail() {
        return this.productComponent.getDetail();
    }
}

class ComercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }
    getDetail() {
        return `${this.tradename} ${this.brand}` + super.getDetail();
    }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }
    getDetail() {
        return super.getDetail()+ ` $${this.price}` ;
    }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `<h1>Información del producto</h1>
            <p>
            ${super.getDetail()}
            </p>
        `
    }
}

//Ejecution
//Component
const productComponent = new ProductComponent(' Cerveza');
console.log(productComponent.getDetail());

//decorator1 con componente
const comercialInfoProduct =
    new ComercialInfoProductDecorator(productComponent, 'London Porter', 'Fuller');
console.log(comercialInfoProduct.getDetail());

//decorator2 con componente
const storeProduct = new StoreProductDecorator(productComponent, 15.5); 
console.log(storeProduct.getDetail());

//decorator 2 con decorator1
const product = new StoreProductDecorator(comercialInfoProduct, 16.5);  
console.log(product.getDetail());

//decorator 3 con decorator 2 con decorator1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();