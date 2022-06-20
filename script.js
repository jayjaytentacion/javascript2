const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

const operator= prompt('Enter an operator(either +, -, * or /): ');

let result;
if(operator=='+'){
    result=number1+number2;
}else if(operator=='-'){
    result=number1-number2;
}else if(operator=='*'){
    result=number1*number2;
}else if(operator=='/'){
    result=number1/number2;
}
alert(result);
