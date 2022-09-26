class DocumentContext{
    constructor(){
        this.content = '';
        this.state = new BlankState();
    }
    setState(state){
        this.state = state;
    }
    write(text){
        this.state.write(this, text);
    }
}

class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}
class WithContentState{
    write(documentContext, text){
        documentContext.content += ' '+text;
    }
}

class AprrovedState{
    write(documentContext, text){
        console.error('Documento aprobado ya no se modifica');
    }
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write('pato');
console.log(doc.content)
console.log(doc.state);
doc.write('ALGO');
doc.write('MAS');
console.log(doc.content)

doc.setState(new AprrovedState());
console.log(doc.state);
doc.write('otra cosa');
console.log(doc.content);

doc.setState(new WithContentState());
console.log(doc.state);
doc.write('No que no');
console.log(doc.content);