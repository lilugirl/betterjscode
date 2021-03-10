const delay=()=>new Promise(r=>{
    setTimeout(r,1000)
})

const onCatchError=e=>{
    if(e==='CODE_FAIL'){
        console.log(e);
        return;
    }
    if(e==='CODE_FATAL'){
        console.log(e);
        return;
    }
    throw 'other error'
}

const onSomeOtherCatchError=()=>{
    console.log('some other error');
};


const fetchData=async function (url){
    await delay();
    if(url==='fail') throw 'CODE_FAIL';
    if(url==='fatal') throw 'CODE_FATAL';
    if(url==='error') throw '????';
    if(url==="") return "OK"
}

async function main(){
   try{
       const data=await fetchData("error").catch(onCatchError).catch(onSomeOtherCatchError);
       console.log('data',data);
   }catch(e){

      console.log('something else handle here',e);
   }
}

main();