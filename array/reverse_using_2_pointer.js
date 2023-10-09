const word = "Hello world";
const wordArr = word.split("");


let endPointer = wordArr.length - 1;

for(let startPointer = 0; startPointer < endPointer; startPointer++){
    //swaping the elements
   [wordArr[startPointer], wordArr[endPointer]] = [wordArr[endPointer], wordArr[startPointer]];
   endPointer--;
}

console.log(wordArr.join(""))


// let startPointer = 0;
// let endPointer = wordArr.length - 1;
// while(startPointer<endPointer){
//     [wordArr[endPointer], wordArr[startPointer]] = [wordArr[startPointer], wordArr[endPointer]];
//     startPointer++;
//     endPointer--;
// }

// console.log(wordArr.join(""))