import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: ' Enter first number', type:'number', name : 'firstNumber'},
{message: 'Enter second number',type: 'number', name:'secondNumber'},
{message: "select one of the operation to perform operation", type: 'list', name: 'operation',
choices:["addition","subtraction",'multiply','divide'],},]);

if(answer.operation === 'addition'){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operation === 'subtraction'){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === 'multiply'){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === 'divide'){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log('please select valid operator');
}