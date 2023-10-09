
let k = 3;
//output-->[8, 9, 10, 1, 2, 3, 4, 5, 6, 7]



function rightRotate(arr){

    const number_of_rotation = Math.floor(k % arr.length);
    const temp = [];
// to store the rotation elements
    for(let i = arr.length - number_of_rotation; i < arr.length; i++){
        temp.push(arr[i])
    }
 // to shift forward the rest of the elements of the array   
    for(let i = arr.length - 1; i >= number_of_rotation; i--){
        arr[i] = arr[i - number_of_rotation];
    }

    for(let i=0; i<temp.length; i++){
        arr[i] = temp[i];
    }
    
console.log(arr)
    

}

//input               k=3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rightRotate(arr)