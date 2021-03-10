let data=[1,2,3,4,5];
const MULTIPLIER=5;

let mapped=[];
mapped=data.reduce((curr,next)=>{
    if(next % 2 ==0) curr=[...curr,next*MULTIPLIER];
    return curr;
},[])

console.log(mapped);
console.log(data);