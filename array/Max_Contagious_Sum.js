const findMaxSum = (arr) => {
    let maxSum = -Infinity;
    let continousMax = 0;
    for(let i=0; i<arr.length;i++){ 
        continousMax = continousMax + arr[i]; 
        if(continousMax > maxSum){
            maxSum = continousMax; 
        }
        if(continousMax < 0){
            continousMax = 0; 
        }
    }
    console.log(maxSum);
    return maxSum;
}
const arr = [ -2, -3, -4, -11, -100, -2024 ];
findMaxSum(arr);