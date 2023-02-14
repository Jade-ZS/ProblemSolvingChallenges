/* Start with an array of strings. 
Print all of the words in the array,
but change every t to an uppercase T.

- define an array of strings
- iterate over the element (for)
- find the index of t (research method)
- change t to T (research method)
- print out all the words 

*/

var strings = ['happy', 'today', 'together', 'at', 'built'];
for (var i = 0; i < strings.length; i++) {
    strings[i] = strings[i].replaceAll('t', 'T');
    console.log(strings[i]);
}

console.log(strings);