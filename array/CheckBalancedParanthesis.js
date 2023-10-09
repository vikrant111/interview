function checkFunction(expression){
    const stack = [];
    //kyunki opening or closing itne hi ho sakte hain to inhe predefine kar k ralkkh lenge compare karne k liye
    const closingParanthesis='}])';
    const openingParanthesis='{([';
    for (let item of expression){
        if (openingParanthesis.includes(item)){
            stack.push(item);//whenever you get the opening symbol push it to stack
        }else if(closingParanthesis.includes(item)){
            if(stack.length===0){
                return false;//if you find the stack empty that means there is closing symbol without its opening part because
                //the stack will hold only the opening symbols
            }
            const top = stack.pop();//else remove the last element from the stack and hold it in a variable 
            if((item===')' && top!=='(') || (item==='}' && top!=='{') || (item===']' && top!=='(')){
                //checkm whether the closing current item has opening symbol or not which is top element present in the stack
                //if not return false
                return false;
            }
        }
    }
    return stack.length===0;
    //check if the stack is empty or not, if YES then balanced or else not balanced
}


console.log(checkFunction('()'))