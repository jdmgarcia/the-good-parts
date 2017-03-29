// Modules
//
String.method('deentityify', function () {
    // The entity table. It maps entity names to characters
    //
    let entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    // Return the deentityify method.
    //
    return function () {
        // This is the deentityify method. It calls the string
        // replace method, looking for substrings that start
        // with '&' and end with ';'. If the characters in
        // between are in the entity table, then replace the
        // entity with the character form the table. It uses
        // a regular expression.
        //
        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                let r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

console.log('deentityify: ' + '&lt;&quot;&gt;&copy;'.deentityify());

// Make an object that produces a serial number
//
let serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    //
    let prefix = '', seq = 0;

    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            let result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

let seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
let unique = seqer.gensym();

console.log('unique: ' + unique);
console.log('gensym(): ' + seqer.gensym());
console.log('unique: ' + unique);

unique = seqer.gensym();
console.log('unique: '+ unique);

// Cascade
//
let other_seqer = serial_maker();
other_seqer.set_prefix('A');
other_seqer.set_seq('8000');
let other_unique = other_seqer.gensym();
console.log('other_unique: ' + other_unique);

// Curry
//
Function.method('curry', function () {
    let slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;

    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

let add1 = add.curry(1);
console.log('add1: ' + add1(6));

// Memoization
//
let simply_fibonacci = (function () {
    let memo = [0, 1];
    let fib = function (n) {
        let result = memo[n];

        if (typeof result !== 'number') {
            result = fib(n-1) + fib(n-2);
        }

        return result;
    };

    return fib;
}());

console.log('simply_fibonacci(7): ' + simply_fibonacci(7));

let memoizer = function (memo, formula) {
    let recur = function (n) {
        let result = memo[n];
       
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

let fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n-1) + recur(n-2);
});

let factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n-1);
});

console.log('fibonacci(7): ' + fibonacci(7));
console.log('factorial(7): ' + factorial(7));




