let currentNumber = '0'
let previousNumber = '0';
let calculation = '';

let display = document.getElementById('display').innerHTML = currentNumber;

let clear = document.getElementById('clear');

let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let eight = document.getElementById('eight');
let seven = document.getElementById('seven');
let nine  = document.getElementById('nine');

let dot = document.getElementById('dot');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let percent = document.getElementById('percent');
let negate = document.getElementById('negate');
let equals = document.getElementById('equals');



// Interactibillity for all the buttons on the calculator

// change color on the key when pressed with mouse
zero.addEventListener('mousedown', function() {
        zero.style.backgroundColor = 'rgb(159,157,160)'
        if (currentNumber.length < 14) {
            if (currentNumber == '0') {
                return
            }
            else {
                document.getElementById('display').innerHTML = currentNumber + '0';
                currentNumber += '0'
            }
        }
})

one.addEventListener('mousedown', function() {
    one.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '1';
            currentNumber = '1'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '1';
            currentNumber += '1'
        }
    }  
})
two.addEventListener('mousedown', function() {
    two.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '2';
            currentNumber = '2'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '2';
            currentNumber += '2'
        }
    }
})
three.addEventListener('mousedown', function() {
    three.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '3';
            currentNumber = '3'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '3';
            currentNumber += '3'
        }
    }
})
four.addEventListener('mousedown', function() {
    four.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '4';
            currentNumber = '4'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '4';
            currentNumber += '4'
        }
    }
})
five.addEventListener('mousedown', function() {
    five.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '5';
            currentNumber = '5'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '5';
            currentNumber += '5'
        }
    }
})
six.addEventListener('mousedown', function() {
    six.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '6';
            currentNumber = '6'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '6';
            currentNumber += '6'
        }
    }
})
seven.addEventListener('mousedown', function() {
    seven.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '7';
            currentNumber = '7'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '7';
            currentNumber += '7'
        }
    }
})
eight.addEventListener('mousedown', function() {
    eight.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '8';
            currentNumber = '8'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '8';
            currentNumber += '8'
        }
    }
})
nine.addEventListener('mousedown', function() {
    nine.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.length < 7) {
        if (currentNumber == '0') {
            document.getElementById('display').innerHTML = '9';
            currentNumber = '9'
        }
        else {
            document.getElementById('display').innerHTML = currentNumber + '9';
            currentNumber += '9'
        }
    }
})
dot.addEventListener('mousedown', function() {
    dot.style.backgroundColor = 'rgb(159,157,160)'
    if (currentNumber.includes('.')) {
        return;
    }
    else {
        document.getElementById('display').innerHTML = currentNumber + '.';
        currentNumber += '.'
    }
})
clear.addEventListener('mousedown', function() {
    clear.style.backgroundColor = 'rgb(95,93,97)';
    document.getElementById('display').innerHTML = '0';
    document.getElementById('display').style.fontSize = '47px'
    
    if (currentNumber != '0') {
        currentNumber = '0' 
    }
    else if (currentNumber == '0') {
        previousNumber = '0'
        currentNumber = '0';
    }

    calculation = '';
})
plus.addEventListener('mousedown', function() {
    plus.style.backgroundColor = 'rgb(201,125,32)'
    previousNumber = currentNumber;
    currentNumber = '0';
    calculation = '+';
})
minus.addEventListener('mousedown', function() {
    minus.style.backgroundColor = 'rgb(201,125,32)';
    previousNumber = currentNumber;
    currentNumber = '0'; 
    calculation = '-';
})
divide.addEventListener('mousedown', function() {
    divide.style.backgroundColor = 'rgb(201,125,32)';
    previousNumber = currentNumber;
    currentNumber = '0'
    calculation = '/';
})
multiply.addEventListener('mousedown', function() {
    multiply.style.backgroundColor = 'rgb(201,125,32)';
    previousNumber = currentNumber;
    currentNumber = '0'
    calculation = 'x';
})
percent.addEventListener('mousedown', function() {
    percent.style.backgroundColor = 'rgb(95,93,97)';
    currentNumber /= 100;
    document.getElementById('display').innerHTML = currentNumber

})
negate.addEventListener('mousedown', function() {
    negate.style.backgroundColor = 'rgb(95,93,97)';
    if (currentNumber != '0') {
        if (currentNumber.includes('-')) {
            currentNumber = currentNumber.replace('-','');
        }
        else {
            currentNumber = '-'+currentNumber;
        }
        document.getElementById('display').innerHTML = currentNumber;
    }

})
equals.addEventListener('mousedown', function() {
    equals.style.backgroundColor = 'rgb(201,125,32)';
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    switch(calculation) {
        case '+': currentNumber = previousNumber + currentNumber; break;
        case '-': currentNumber = previousNumber - currentNumber; break;
        case 'x': currentNumber = previousNumber * currentNumber; break;
        case '/': if (currentNumber == 0) {
            currentNumber = String('Not a Number');
        }
        else {
            currentNumber = previousNumber / currentNumber;
        }
    }
    if (currentNumber % 1 == 0) {
        document.getElementById('display').innerHTML = currentNumber  
    }
    else {

        document.getElementById('display').innerHTML = currentNumber.toFixed(2);
    }
    
    previousNumber = String(previousNumber);
    currentNumber = String(currentNumber);
})

// revert color on key when pressed with mouse

clear.addEventListener('mouseup', function() {
    clear.style.backgroundColor = 'rgb(73,65,65)'
})
negate.addEventListener('mouseup', function() {
    negate.style.backgroundColor = 'rgb(73,65,65)'
})
percent.addEventListener('mouseup', function() {
    percent.style.backgroundColor = 'rgb(73,65,65)'
})
zero.addEventListener('mouseup', function() {
    zero.style.backgroundColor = 'rgb(95,93,97)'

})
one.addEventListener('mouseup', function() {
    one.style.backgroundColor = 'rgb(95,93,97)'
})
two.addEventListener('mouseup', function() {
    two.style.backgroundColor = 'rgb(95,93,97)'
})
three.addEventListener('mouseup', function() {
    three.style.backgroundColor = 'rgb(95,93,97)'
})
four.addEventListener('mouseup', function() {
    four.style.backgroundColor = 'rgb(95,93,97)'
})
five.addEventListener('mouseup', function() {
    five.style.backgroundColor = 'rgb(95,93,97)'
})
six.addEventListener('mouseup', function() {
    six.style.backgroundColor = 'rgb(95,93,97)'
})
seven.addEventListener('mouseup', function() {
    seven.style.backgroundColor = 'rgb(95,93,97)'
})
eight.addEventListener('mouseup', function() {
    eight.style.backgroundColor = 'rgb(95,93,97)'
})
nine.addEventListener('mouseup', function() {
    nine.style.backgroundColor = 'rgb(95,93,97)'
})
dot.addEventListener('mouseup', function() {
    dot.style.backgroundColor = 'rgb(95,93,97)'
})
plus.addEventListener('mouseup', function() {
    plus.style.backgroundColor = 'rgb(253,158,43)'
})
minus.addEventListener('mouseup', function() {
    minus.style.backgroundColor = 'rgb(253,158,43)';
})
divide.addEventListener('mouseup', function() {
    divide.style.backgroundColor = 'rgb(253,158,43)';
})
multiply.addEventListener('mouseup', function() {
    multiply.style.backgroundColor = 'rgb(253,158,43)';
})
equals.addEventListener('mouseup', function() {
    equals.style.backgroundColor = 'rgb(253,158,43)';
})
