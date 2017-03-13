// JavaScript
//

// Object with functions as methods
//
let node = {
    action: '',
    get: function () {
        console.log('Value of action: ' + this.action);
    },
    set: function (newAction) {
        this.action = newAction;
    },
    appendChild: function (text, type = 'span') {
        let newLayer = document.createElement(type);

        newLayer.innerHTML = text;
        document.getElementById(this.action).appendChild(newLayer);
    },
    printObj: function () {
        let myObj = '', myProp;

        for (myProp in this) {
            if (this.hasOwnProperty(myProp)) {
                myObj += myProp + '<br />';
            }
        }

        return myObj;
    }
};

// Return a decreasing secuence starting in `num`
//
let secuence = function (num) {
    let secuence = num, i;

    for (i = num - 1; i > 0; i--) {
        secuence += ' - ' + i;
    }

    return secuence;
};

// Remove content of HTML tag with id = `id`
//
let removeHTML = function (id) {
    document.getElementById(id).innerHTML = '';
};

// Return if the parameter is a number
//
let isNumeric = function (input) {
    let re = /^-{0,1}\d*\.{0,1}\d+$/;

    return (re.test(input));
};

// Add two numbers
// If one of the parameters at least is not a number, it return a exception message
let add = function (num1, num2) {
    if (!isNumeric(num1) || !isNumeric(num2)) {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return Number(num1) + Number(num2);
};

// Add two numbers with security
//
let controlAdd = function (num1, num2) {
    let sum;

    try {
        sum = add(num1, num2);
    } catch (e) {
        sum = '<strong style="color: firebrick">' + e.name + ': ' + e.message + '</strong>';
    }

    return sum;
};

// Control of the action buttons
//
let load = function (typeStatement) {
    let value = '', num1, num2;

    node.set(typeStatement);
    node.get();

    switch (typeStatement) {
        case 'switch':
            value = document.getElementById('inputSwitch').value;

            removeHTML(typeStatement);
            node.appendChild(secuence(value));
            break;

        case 'for':
            removeHTML(typeStatement);
            node.appendChild(node.printObj(), 'strong');
            break;

        case 'exception':
            num1 = document.getElementById('inputException1').value;
            num2 = document.getElementById('inputException2').value;

            removeHTML(typeStatement);
            node.appendChild(controlAdd(num1, num2));
            break;

        default:
            console.log('No available option in switch: ' + typeStatement);
    }
};
