/**
 * Created by jdmgarcia on 14/03/2017.
 */

// Example Method Invocation Pattern
//
let myObj = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObj.increment();
console.log('Value increment: ' + myObj.value); // 1

myObj.increment(2);
console.log('Value increment: ' + myObj.value); // 3

// Example Function Invocation Pattern
//
myObj.double = function () {
    let that = this;

    let helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();
};

myObj.double();
console.log('Value double: ' + myObj.value);

// Example Constructor Invocation Pattern
//

// Create a constructor function called Quo.
// It makes an object with a status property.
//
let Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.
//
Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo
//
let myQuo = new Quo('confused');
console.log('I\'m ' + myQuo.get_status());

// Example Apply Invocation Pattern
//

// Make an array of 2 numbers and add them.
//
let array = [3, 4];
let sum = add.apply(null, array); // sum is 7
console.log('Value of sum: ' + sum);

// Make an object with a status member.
//
let statusObject = {
    status: 'A-Ok'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the `get_status` method on
// statusObject even though statusObject does not have
// a `get_status` method.
//
let status = Quo.prototype.get_status.apply(statusObject);
console.log('Value of status: ' + status);


// Other example about object.prototype.construct
//
Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};

function MyConstructor() {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'

// Parameter arguments of a function
//
let showArguments = function () {
    return arguments;
};
console.log(showArguments(1, 2, 3, 4));

// Augmenting Types
//
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

console.log((-10 / 3).integer()); // -3
console.log('"' + '       neat      '.trim() + '"');

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
//
let walk_the_DOM = function walk (node, func) {
    func(node);
    node = node.firstChild;

    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// result array.

let getElementsByAttribute = function (att, value) {
    let results = [];

    walk_the_DOM(document.body, function (node) {
       let actual = node.nodeType === 1 && node.getAttribute(att);

       if (typeof actual === 'string' &&
           (actual === value || typeof value !== 'string')) {
           results.push(node);
       }
    });

    return results;
};

console.log(getElementsByAttribute('id'));

let elementFunctions = document.getElementById('functions');
let actual = elementFunctions.nodeType === 1 && elementFunctions.getAttribute('data-test');
console.log(actual);


