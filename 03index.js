const NO_NAME=Symbol();
class BetterPerson{
    constructor(name){
        this.name=name || NO_NAME
    }

    hasName(){
        return this.name !==NO_NAME;
    }
}

deepak=new BetterPerson(0);
console.log(deepak);
console.log(deepak.hasName());
deepak= new BetterPerson('liuyi');
console.log(deepak);
console.log(deepak.hasName());