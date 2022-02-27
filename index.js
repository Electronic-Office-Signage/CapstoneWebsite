// comment
console.log('Hello World');

let name = 'Alex';
console.log(name);


let age = 22;
let person = {
    name: 'Alex',
    age: 22
}

//dot notation
person.name = "Alexander";

//bracket notation
person['name'] = 'Mary';

//talking about arrays - elements can be different types
//an array is a type of object
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

function green(name) 
{
    console.log('Name' + name);
}

green('John');
green('Mary');

function template1Click()
{
    alert("Template 1 has been clicked");
}

function template2Click()
{
    alert("Template 2 has been clicked")
}

/*
if(mouseClick && button=red)
{
    button=Green;
}
else
{
    button=red;
}

*/

//var x = document.getElementById("")