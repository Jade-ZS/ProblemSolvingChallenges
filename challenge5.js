/* Write a method or function that accepts an array of 10 integers 
(between 0 and 9) and 
returns a string of those numbers in the form of a phone number. 
For example, if you were given [5, 5, 5, 1, 2, 3, 4, 5, 6, 7], 
the method or function will return 555-123-4567.

- create an array from 0 to 9
- function
    - format into a phone number
        - XXX-XXX-XXXX

*/

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function phoneNumberFormat(array) {
    var part1 = numbers.slice(0, 3).join('');
    var part2 = numbers.slice(3, 7).join('');
    var part3 = numbers.slice(7).join('');
    var phoneNumber = part1 + '-' + part2 + '-' + part3;
    return phoneNumber;
}

var test = phoneNumberFormat(numbers);
console.log(test);