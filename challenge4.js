/* Start with an array of student names. 
Print a numbered list of the student's names in alphabetical order. 
For example, if you start with ["Hector", "Winston", "Finley"], 
the final output should be 1. Finley 2. Hector 3. Winston.

- define an array of names
- sort
- add number
- array to string
- print

*/

var names = ["Hector", "Winston", "Finley"];
names.sort();
var length = names.length;

var numbers = [];
for (var i = 0; i < length; i++) {
    numbers[i] = i + 1;
}
console.log(numbers)

for (var i = 0; i < length; i++) {
    names[i] = numbers[i] + '. ' + names[i];
}
console.log(names);