// for postfix the operant comes after
// 5 5 +  / 10

// Input:  4.5 5.25 +
// Output: 9.75


// take the operands and set them equal to regular expression

// 5 5 + /10 === 5 + 5 = 10;


// Input:  4.5 5.25 +
// Output: 9.75





const operands = {
    plus: '+',

    minus: '-',

    multiplication: '*',

    
    division: '/'

}

// take the expression in the strin and split it so that, I'm able to move
//to postfix format
let  postfixProb = "";


let postfixExp = [];


// check for operator in the string
// function checkOperator(str) {

//     let checkStr = str.split('')
    
//     for(let i = 0; i < checkStr.length; i++) {
//         if(checkStr[i] === '+') {
//             return true;
//         } else if (checkStr[i] === '-') {
//             return true;
//         } else if (checkStr[i] === '*') {
//             return true;
//         } else if (checkStr[i] === '/') {
//             return true;
//         } else  {
//             return false
//         }
//     }
// }


function postFixCalc(exp) {
    //create a variable

    // check where the operator

    //

    // turn into array

    // and then i want to be able to compare it to regular expression
}


const postfix = {
   checkOperator: (str) => {

        let checkStr = str.split('')

        console.log(checkStr);

        let operators = [];
        
        for (let i = 0; i < checkStr.length; i++) {
            console.log(checkStr[i])
            if(checkStr[i] == '+') {
                operators.push('+')
            } else if (checkStr[i] == '-') {
                operators.push('-')
            } else if (checkStr[i] == '*') {
               operators.push('*')
            } else if (checkStr[i] == '/') {
            operators.push('/')
            }  else if (checkStr[i] == ' ') {
                
            } 
        }
        return operators;
    }

    
}

module.exports = postfix;




