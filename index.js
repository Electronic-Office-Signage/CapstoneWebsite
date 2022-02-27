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

function t1click()
{
    document.getElementById("dispTemplate").innerHTML = `<div class="header-row">
                                                            <h1 class="header-column-left">Example Name</h1>
                                                            <h1 class="header-column-right">9:12</h1>
                                                        </div>

                                                        <div>
                                                            <form class="grid-container">
                                                                <!--<label for="entry1" class="entry-1">box1</label>-->
                                                                <textarea id="entry1" class="entry-1" type="text"></textarea>

                                                                <!--<label for="entry2" class="entry-2">box2</label>-->
                                                                <textarea id="entry2" class="entry-2" type="text"></textarea>
                                                            </form>
                                                        </div>`;
    // alert("template 1 selected");
}

function t2click()
{
    document.getElementById("dispTemplate").innerHTML = `

                                                        <div>
                                                            <form class="grid-container">
                                                                <!--<label for="entry1" class="entry-1">box1</label>-->
                                                                <textarea id="entry1" class="entry-1" type="text"></textarea>

                                                                <!--<label for="entry2" class="entry-2">box2</label>-->
                                                                <textarea id="entry2" class="entry-2" type="text"></textarea>
                                                            </form>
                                                        </div>
                                                        
                                                        <div class="header-row">
                                                            <h1 class="header-column-left">Example Name</h1>
                                                            <h1 class="header-column-right">9:14</h1>
                                                        </div>`;
    // alert("template 1 selected");
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