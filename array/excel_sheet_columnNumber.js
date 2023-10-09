function getColumnNumber(code) {
    //initialize the column number with 0
    let columnNumber = 0;
  
    //run the loop till the code length
    for (let i = 0; i < code.length; i++) {

        //finding the chareacter position of each character of the code
      const charPosition = code.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

      //plus 1 nahi kroge to value hamesha ek kam aegi 
      //isliye plus 1 karna zaroori hai 


      
      columnNumber = columnNumber * 26 + charPosition;
    }
  
    return columnNumber;
  }
  
  // Example usage:
  console.log(getColumnNumber("AA")); // Should return 27
  console.log(getColumnNumber("AB")); // Should return 28
  console.log(getColumnNumber("BA")); // Should return 53
  console.log(getColumnNumber("Z"));  // Should return 26
  console.log(getColumnNumber("C"));  // Should return 3
  