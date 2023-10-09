function largestelement(array){
    let lg = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if (arr[i]>lg){
            lg=arr[i]
        }
    }
    return lg;
}

const arr = [-10,-3,0,-5,-77,-21];
console.log(largestelement(arr))

