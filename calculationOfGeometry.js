
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
}
//-------------------- end all re-use function ------------------------

//---------------------- the all card aria function ---------------------

    // triangle button clicked 01
    targetCurdValue('btn-calculation-1').addEventListener('click', () => {
        let baseInput = id('base-input');
        let heightInput = id('height-input');
        let triangle = parseFloat(0.5 * (baseInput * heightInput));
    
    
        // input validation
            if (isNaN(triangle)) {
                alert('Input only number')
            }
            else {
                set('Triangle = ', triangle, ' cm²');
                converterFn();
                targetSmall[0].innerText = 'Area (A) = 0.5 x ' + baseInput + ' x ' + heightInput;
            }
            //meter to convater number
        })

 // rectangle button clicked 02
targetCurdValue('btn-calculation-2').addEventListener('click', () => {
    let width = id('rectangle-width');
    let hight = id('rectangle-hight');

    let rectangle = parseFloat(width * hight);


    // input validation
        if (isNaN(rectangle)) {
            alert('Input only number')
        }
        else {
            set('Rectangle = ', rectangle, ' cm²');
            converterFn();
            targetSmall[1].innerText = 'Area (A) = ' + width + ' x ' + hight;
        }
})
   


// parallelogram button clicked 03
targetCurdValue('btn-calculation-3').addEventListener('click', () => {
    let parallelogramWidth = id('parallelogram-width');
    let parallelogramHight = id('parallelogram-higth');

    let parallelogram = parseFloat(parallelogramWidth * parallelogramHight);


    // input validation
        if (isNaN(parallelogram)) {
            alert('Input only number')
        }
        else {
            set('Parallelogram = ', parallelogram, ' cm²');
            converterFn();
            targetSmall[2].innerText = 'Area (A) = ' + parallelogramWidth + ' x ' + parallelogramHight;
        }
})


// rhombuse button clicked 04
targetCurdValue('btn-calculation-4').addEventListener('click', () => {
    let rhombuseWidth = id('rhombuse-width');
    let rhombuseHight = id('rhombuse-higth');

    let rhombuse = parseFloat((rhombuseWidth * rhombuseHight) * 0.5);


    // input validation
        if (isNaN(rhombuse)) {
            alert('Input only number')
        }
        else {
            set('Rhombuse = ', rhombuse, ' cm²');
            converterFn();
            targetSmall[3].innerText = 'Area (A) = ' + rhombuseWidth + ' x ' + rhombuseHight  + ' x ' + 0.5;
        }
})

// pentagon button clicked 05
targetCurdValue('btn-calculation-5').addEventListener('click', () => {
    let pentagonPerimeter = id('pentagon-perimeter');
    let pentagonApothem = id('pentagon-apothem');

    let pentagon = parseFloat( 0.5 * (pentagonPerimeter * pentagonApothem));


    // input validation
        if (isNaN(pentagon)) {
            alert('Input only number')
        }
        else {
            set('Pentagon = ', pentagon, ' cm²');
            converterFn();
            targetSmall[4].innerText = 'Area (A) = ' + pentagonPerimeter + ' x ' + pentagonApothem  + ' x ' + 0.5;
        }
})

// ellipse button clicked 05
targetCurdValue('btn-calculation-6').addEventListener('click', () => {
    let ellipsea_major_axis = id('ellipsea_major_axis');
    let ellipse_minor_axis = id('ellipse_minor_axis');
    let pi_value = 3.14;

    let ellipse = parseFloat( pi_value * (ellipsea_major_axis * ellipse_minor_axis));


    // input validation
        if (isNaN(ellipse)) {
            alert('Input only number')
        }
        else {
            set('Ellipse = ', ellipse, ' cm²');
            converterFn();
            targetSmall[5].innerText = 'Area (A) = ' +  pi_value + ' x ' + ellipsea_major_axis + ' x ' + ellipse_minor_axis;
        }
})