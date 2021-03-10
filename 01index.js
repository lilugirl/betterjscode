const {
    ClientWithInjection,
    ClientWithoutInjection
}=require('./Client');
const Service=require('./Service');
const cw=new ClientWithInjection(new Service())
const co=new ClientWithoutInjection();
console.log('true or false',cw.greet()===co.greet());