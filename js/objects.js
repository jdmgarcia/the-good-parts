/**
 * Created by jdmgarcia on 13/03/2017.
 */

let stooge = {
    name: 'Jerome',
    surname: 'Howard'
};

let flight = {
    airline: 'Oceanic',
    number: 815,
    departure: {
        IATA: 'SYD',
        time: '2004-09-22 14:55',
        city: 'Sydney'
    },
    arrival: {
        IATA: 'LAX',
        time: '2004-09-23 10:42',
        city: 'Los Angeles'
    }
};

let another_stooge = Object.create(stooge);
let copy_stooge = stooge;

console.log ('name of another_stooge: ' + another_stooge.name); // another_stooge inherit

another_stooge.profession = 'actor';
console.log ('profession of stooge: ' + stooge.profession); // stooge and another_stooge are different objects

copy_stooge.name = 'John';
console.log ('name of stooge: ' + stooge.name); // stooge and copy_stooge is the same object

// array
//
let properties = [
    'name',
    'surname',
    'profession'
];

another_stooge.name = 'Fredderic';
console.log ('name of another_stooge: ' + another_stooge.name);

delete another_stooge.name;
console.log ('name of another_stooge: ' + another_stooge.name);
