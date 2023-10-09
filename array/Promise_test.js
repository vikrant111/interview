const promise1 = new Promise((resolve, reject)=>{
    if(1+1==2){
        resolve("promise resolved")
    }else{
        reject("promise rejected")
    }
})

const promise2 = new Promise((resolve, reject)=>{
    if(10%2==0){
        resolve("promise resolved")
    }else{
        reject("promise rejected")
    }
})

const promise3 = new Promise((resolve, reject)=>{
    if(1+1==20){
        resolve("promise resolved")
    }else{
        reject("promise rejected")
    }
})


Promise.allSettled([promise1, promise2, promise3])
.then((result)=>{
    console.log(result)
})
