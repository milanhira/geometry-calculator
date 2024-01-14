
//---------- create some re-use functionality -----------------------

// get an any id from html page
function targetCurdValue(target){
    const btnCalculation1 = document.getElementById(target);
    return btnCalculation1;
}
// get all small tags
const targetSmall = document.getElementsByTagName('small');

//get any input value using this function
function id(getElementById) {
    const newValue = document.getElementById(getElementById).value;
    return parseFloat(newValue);
}

// converter button using function
function converterFn (){
    let targetValue = document.getElementById('list-container');
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary mx-3');
    button.setAttribute('id', 'clikedId');
    button.innerText = 'Convert';
    targetValue.appendChild(button);
}

// set new elements value using function
function set(stringValue1, passValue, stringValue2) {
    let targetValue = document.getElementById('list-container');
    let li = document.createElement('li');
    li.setAttribute('class', 'list');
    targetValue.appendChild(li);
    li.innerText = `${stringValue1} ${passValue} ${stringValue2}`;
    converterFn();
}
//-------------------- end all re-use function ------------------------