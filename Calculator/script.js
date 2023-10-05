let inputNum = '';
let operation = '';
let result = 0;



function appendNumber(num){
     inputNum = document.getElementById('inputTextBox');
    inputNum.value += num;
    
}

function clearInput(){
     inputNum = document.getElementById('inputTextBox');
    inputNum.value="";
}

function appendOperation(operator){
    inputNum = document.getElementById('inputTextBox');
    inputNum.value += operator; 
}
function addNum(num1,num2){
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    let total = parsedNum1+parsedNum2;
    return total;
}

function subtractNum (num1,num2){

    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    let total = parsedNum1-parsedNum2;
    return total;
}
function multiplyNum (num1,num2){

    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    let total = parsedNum1*parsedNum2;
    return total;
}
function divideNum (num1,num2){

    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    let total = parsedNum1/parsedNum2;
    return total;
}

function equalTo(){
     inputNum = document.getElementById('inputTextBox').value;
    const inputArray = inputNum.split('');
    for (let i=0; i< inputArray.length;i++){
        switch(inputArray[i]){
            case '+':
                operation = 'addition';
                if(operation==='addition'){
                const operationArr = inputNum.split('+');
                let num1 = operationArr[0];
                let num2 = operationArr[1];
                result = addNum(num1,num2);
                inputNum = document.getElementById('inputTextBox').value;
                inputNum.value = result;
                clearInput(inputNum);
                inputNum.value = result;
                }
                break;
            case '-':
                operation = 'subtraction';
                if(operation==='subtraction'){
                const operationArr = inputNum.split('-');
                let num1 = operationArr[0];
                let num2 = operationArr[1];
                result = subtractNum(num1,num2);
                inputNum = document.getElementById('inputTextBox').value;
                inputNum.value = result;
                clearInput(inputNum);
                inputNum.value = result;
                }
                break;
            case '*':
                operation = 'multiplication';
                if(operation==='multiplication'){
                    const operationArr = inputNum.split('*');
                    let num1 = operationArr[0];
                    let num2 = operationArr[1];
                    result = multiplyNum(num1,num2);
                    inputNum = document.getElementById('inputTextBox').value;
                    inputNum.value = result;
                    clearInput(inputNum);
                    inputNum.value = result;
               
                }
                break;
            case '/':
                operation = 'division';
                if(operation==='division'){
                    const operationArr = inputNum.split('/');
                    let num1 = operationArr[0];
                    let num2 = operationArr[1];
                    result = divideNum(num1,num2);
                    inputNum = document.getElementById('inputTextBox').value;
                    inputNum.value = result;
                    clearInput(inputNum);
                    inputNum.value = result;
               
                }
                break;
        }
    }
    
    // if(operation==='addition'){
    //     
    //    
    //     let result = inputNum.value;  
    //     console.log(result);
    // }

}
