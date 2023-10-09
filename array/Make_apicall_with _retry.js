let makeTry = 0;
let numberOfRetry = 3;

const ApiCall =  () =>{
    
    const response =  fakeApiCall()
    .then(res=>res.json())
    .then(result=>console.log(result))
    .catch((err)=>{
    if(makeTry < numberOfRetry){
        makeTry = makeTry + 1;
        console.log("retrying")
        ApiCall();
    }else{
        console.log(err)
        return err;
    }
    

})
}

ApiCall()


function fakeApiCall () {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("rejected promise")
        },1000)
    })
}