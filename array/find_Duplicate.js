function findDuplicate(arr){
    let record = {};
    const nonDuplicate = []
    for(let i = 0; i<=arr.length-1; i++){
        if(!record[arr[i]]){
            record[arr[i]] = 1;
        }else{
            record[arr[i]] = record[arr[i]] + 1;
        }
    }
    
    for(element in record){
        if(record[element]===1){
            nonDuplicate.push(element)
        }
    }
    console.log(nonDuplicate)
    return nonDuplicate;
}

findDuplicate([1,1,2,3,4,4,5,6,7,7,8,8,8])