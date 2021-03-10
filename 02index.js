const property=Symbol();
class Something{
    constructor(){
        this[property]="test";
    }
}

var instance=new Something();
console.log(instance["property"]);
console.log(instance);