
console.log('Hello World');

let displayInfo = { name: 'Example Name', uid: 12345, template_id: 0, title_text: '', title_color: 0, box1_text: '', box1_color: 1 };

document.addEventListener("DOMContentLoaded", function() {
    updateClock();
  });

function t1click()
{
    displayInfo.template_id = 0;
    displayInfo.title_text = $('input#title').val();
    displayInfo.box1_text = $('textarea#entry1').val();
    console.log("t1click");
    document.getElementById("dispTemplate").innerHTML = `<div class="header-row">
                                                            <input id="title" class="header-column-left" placeholder="enter title text here" maxlength="18">
                                                            <h1 id="time" class="header-column-right"></h1>
                                                        </div>

                                                        <div>
                                                            <form class="grid-container">
                                                                <!--<label for="entry1" class="entry-1">box1</label>-->
                                                                <textarea id="entry1" class="entry-1" type="text"></textarea>

                                                                <!-- color picker -->
                                                                <!-- <ul class="container-color">
                                                                    <li class="color-item" id="color1"><input id="color-radio1" type="radio" onclick="e1click('black')" name="radio">
                                                                        <label for="color-radio1"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color2"><input id="color-radio2" type="radio" onclick="e1click('green')" name="radio">
                                                                        <label for="color-radio2"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color3"><input id="color-radio3" type="radio" onclick="e1click('blue')" name="radio">
                                                                        <label for="color-radio3" ></label>
                                                                    </li>
                                                                    <li class="color-item" id="color4"><input id="color-radio4" type="radio" onclick="e1click('red')" name="radio">
                                                                        <label for="color-radio4"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color5"><input id="color-radio5" type="radio" onclick="e1click('yellow')" name="radio">
                                                                        <label for="color-radio5"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color6"><input id="color-radio6" type="radio" onclick="e1click('orange')" name="radio">
                                                                        <label for="color-radio6" ></label>
                                                                    </li>
                                                                </ul> -->


                                                                <!-- <label for="entry2" class="entry-2">box2</label>
                                                                <textarea id="entry2" class="entry-2" type="text"></textarea> -->

                                                                <!-- color picker -->
                                                                <!-- <ul class="container-color">
                                                                    <li class="color-item" id="color1"><input id="color2-radio1" type="radio" onclick="e2click('black')" name="radio2">
                                                                        <label for="color2-radio1"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color2"><input id="color2-radio2" type="radio" onclick="e2click('green')" name="radio2">
                                                                        <label for="color2-radio2"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color3"><input id="color2-radio3" type="radio" onclick="e2click('blue')" name="radio2">
                                                                        <label for="color2-radio3" ></label>
                                                                    </li>
                                                                    <li class="color-item" id="color4"><input id="color2-radio4" type="radio" onclick="e2click('red')" name="radio2">
                                                                        <label for="color2-radio4"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color5"><input id="color2-radio5" type="radio" onclick="e2click('yellow')" name="radio2">
                                                                        <label for="color2-radio5"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color6"><input id="color2-radio6" type="radio" onclick="e2click('orange')" name="radio2">
                                                                        <label for="color2-radio6" ></label>
                                                                    </li>
                                                                </ul> -->


                                                            </form>
                                                        </div>`;
    
    
    $('input#title').val(displayInfo.title_text);
    $('textarea#entry1').text(displayInfo.box1_text);
}

function t2click()
{
    displayInfo.template_id = 1;
    displayInfo.title_text = $('input#title').val();
    displayInfo.box1_text = $('textarea#entry1').val();
    document.getElementById("dispTemplate").innerHTML = `

                                                        <div>
                                                            <form class="grid-container">
                                                                <!--<label for="entry1" class="entry-1">box1</label>-->
                                                                <textarea id="entry1" class="entry-1" type="text"></textarea>

                                                                <!-- color picker -->
                                                                <!-- <ul class="container-color">
                                                                    <li class="color-item" id="color1"><input id="color-radio1" type="radio" onclick="e1click('black')" name="radio">
                                                                        <label for="color-radio1"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color2"><input id="color-radio2" type="radio" onclick="e1click('green')" name="radio">
                                                                        <label for="color-radio2"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color3"><input id="color-radio3" type="radio" onclick="e1click('blue')" name="radio">
                                                                        <label for="color-radio3" ></label>
                                                                    </li>
                                                                    <li class="color-item" id="color4"><input id="color-radio4" type="radio" onclick="e1click('red')" name="radio">
                                                                        <label for="color-radio4"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color5"><input id="color-radio5" type="radio" onclick="e1click('yellow')" name="radio">
                                                                        <label for="color-radio5"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color6"><input id="color-radio6" type="radio" onclick="e1click('orange')" name="radio">
                                                                        <label for="color-radio6" ></label>
                                                                    </li>
                                                                </ul> -->


                                                                <!-- <label for="entry2" class="entry-2">box2</label>
                                                                <textarea id="entry2" class="entry-2" type="text"></textarea> -->

                                                                <!-- color picker -->
                                                                <!-- <ul class="container-color">
                                                                    <li class="color-item" id="color1"><input id="color2-radio1" type="radio" onclick="e2click('black')" name="radio2">
                                                                        <label for="color2-radio1"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color2"><input id="color2-radio2" type="radio" onclick="e2click('green')" name="radio2">
                                                                        <label for="color2-radio2"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color3"><input id="color2-radio3" type="radio" onclick="e2click('blue')" name="radio2">
                                                                        <label for="color2-radio3" ></label>
                                                                    </li>
                                                                    <li class="color-item" id="color4"><input id="color2-radio4" type="radio" onclick="e2click('red')" name="radio2">
                                                                        <label for="color2-radio4"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color5"><input id="color2-radio5" type="radio" onclick="e2click('yellow')" name="radio2">
                                                                        <label for="color2-radio5"></label>
                                                                    </li>
                                                                    <li class="color-item" id="color6"><input id="color2-radio6" type="radio" onclick="e2click('orange')" name="radio2">
                                                                        <label for="color2-radio6" ></label>
                                                                    </li>
                                                                </ul> -->


                                                            </form>
                                                        </div>
                                                        
                                                        <div class="header-row">
                                                            <input id="title" class="header-column-left" placeholder="enter title text here" maxlength="18">
                                                            <h1 id="time" class="header-column-right"></h1>
                                                        </div>`;
    $('input#title').val(displayInfo.title_text);
    $('textarea#entry1').text(displayInfo.box1_text);
    // alert("template 1 selected");
}

// function t3click()
// {
//     document.getElementById("dispTemplate").innerHTML = `<div class="header-row">
//                                                             <h1 class="header-column-left">Example Name</h1>
//                                                             <h1 class="header-column-right">9:12</h1>
//                                                         </div>

//                                                         <div>
//                                                             <form class="grid-container">
//                                                                 <!--<label for="entry1" class="entry-1">box1</label>-->
//                                                                 <textarea id="entry1" class="entry-1" type="text"></textarea>

//                                                                 <!-- color picker -->
//                                                                 <ul class="container-color">
//                                                                     <li class="color-item" id="color1"><input id="color-radio1" type="radio" onclick="e1click('black')" name="radio">
//                                                                         <label for="color-radio1"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color2"><input id="color-radio2" type="radio" onclick="e1click('green')" name="radio">
//                                                                         <label for="color-radio2"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color3"><input id="color-radio3" type="radio" onclick="e1click('blue')" name="radio">
//                                                                         <label for="color-radio3" ></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color4"><input id="color-radio4" type="radio" onclick="e1click('red')" name="radio">
//                                                                         <label for="color-radio4"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color5"><input id="color-radio5" type="radio" onclick="e1click('yellow')" name="radio">
//                                                                         <label for="color-radio5"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color6"><input id="color-radio6" type="radio" onclick="e1click('orange')" name="radio">
//                                                                         <label for="color-radio6" ></label>
//                                                                     </li>
//                                                                 </ul>


//                                                                 <!--<label for="entry2" class="entry-2">box2</label>-->
//                                                                 <textarea id="entry2" class="entry-2" type="text"></textarea>

//                                                                 <!-- color picker -->
//                                                                 <ul class="container-color">
//                                                                     <li class="color-item" id="color1"><input id="color2-radio1" type="radio" onclick="e2click('black')" name="radio2">
//                                                                         <label for="color2-radio1"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color2"><input id="color2-radio2" type="radio" onclick="e2click('green')" name="radio2">
//                                                                         <label for="color2-radio2"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color3"><input id="color2-radio3" type="radio" onclick="e2click('blue')" name="radio2">
//                                                                         <label for="color2-radio3" ></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color4"><input id="color2-radio4" type="radio" onclick="e2click('red')" name="radio2">
//                                                                         <label for="color2-radio4"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color5"><input id="color2-radio5" type="radio" onclick="e2click('yellow')" name="radio2">
//                                                                         <label for="color2-radio5"></label>
//                                                                     </li>
//                                                                     <li class="color-item" id="color6"><input id="color2-radio6" type="radio" onclick="e2click('orange')" name="radio2">
//                                                                         <label for="color2-radio6" ></label>
//                                                                     </li>
//                                                                 </ul>


//                                                             </form>
//                                                         </div>`;
//     // alert("template 1 selected");
// }

function e1click(color)
{
    document.getElementById("entry1").style.color = color;
    displayInfo.entry1Color = color;
}

function e2click(color)
{
    document.getElementById("entry2").style.color = color;
    displayInfo.entry2Color = color;
}

function submitClick()
{
    //~~~ get the text from the entry, add to object
    //~~~ 
    console.log("submit click");

    //adding the main content to the json object
    var message = $('textarea#entry1').val();
    displayInfo.box1_text = message;

    //adding the name to the json object
    var name = $('input#prof-name').val();
    displayInfo.name = name;

    //adding the uid to the json object
    var uid = $('input#uid').val();
    displayInfo.uid = uid;

    //adding the title to the json object
    var titleText = $('input#title').val();
    displayInfo.title_text = titleText;



    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://eos-services.onu.edu:5000/api/user";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(displayInfo));
    console.log(JSON.stringify(displayInfo));
}

function updateClock() {
    // Ivo's content to create the date.
    var now = new Date();
    var hour;
    var minutes;
    hour = now.getHours();
    if(now.getHours() > 12) hour = now.getHours() - 12;


    minutes = (now.getMinutes()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    time = hour + ':' + minutes; 
    document.getElementById('time').innerHTML = time
  }
  setInterval(updateClock, 500);


// post info

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