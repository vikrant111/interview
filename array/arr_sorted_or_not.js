function checkSorted(arr){
    for (let i = 0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return "not";
        }
}
return "sorted"
}


const arr = [1,2,3,400,5,7]
console.log(checkSorted(arr))