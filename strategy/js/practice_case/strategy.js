const data = [
    {
        name :'Erdinger Pikantus',
        country: 'Alemania',
        info: 'Erdinger Pikantus es una cerveza estilo weizenbock',
        img: 'https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/weissbier-int-2021.png'
    },
    {
        name : 'Corona',
        country: 'México',
        info: 'La cerveza corona es una marca mundialmente conocida',
        img: 'https://cdn.shopify.com/s/files/1/2113/5145/products/CORONA_1_1024x1024.jpg?v=1519233767'
    },
    {
        name: 'Delirium Tremens',
        country: 'Bélgica',
        info: 'Tiene una efervecencia fina',
        img: 'https://alternativebeer.com.co/wp-content/uploads/2018/10/Delirium-750-nueva.jpg'
    }
];

class InfoContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    show(){ // metodo del comportamiento
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
            </div>
            <hr>`
        }, '');
    }
}

class DetailedStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <p>${beer.info}</p>
            </div>
            <hr>`
        }, '');
    }
}

class ListWithImageStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                <img width='10%' src='${beer.img}'>
                <h2>${beer.name}</h2>
            </div>
            <hr>`
        }, '');
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedStrategy(),
    new ListWithImageStrategy()
];

const info = new InfoContext(new ListStrategy(),
data, content);
info.show();

slcOptions.addEventListener('change', (event)=>{
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});








