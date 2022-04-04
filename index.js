/**
 * todo:
 * add a function to handle the single sign on info
 *  -I cannot do this because i do not have access to it
 * finnish adding the styles for the form
 * if you feel like making a better thing to get the time for a 12 hour clock do it
 * add a check to see if text is in the title area, if not do not allow the submit to function.
 * add a check if text is in the text area, if not do not allow submit
 * add a scrubber to make sure no bad characters are passed to the DB for XSS attacks 
 * 
 * strict:
 * do not change the class names of the div's in the html it will break the js
 * if you add more div's to the main body node you will break change template
 * 
 */




let displayInfo =
{
    name: 't-huff',
    uid: 12345,
    template_id: 1,
    title_text: 'yo mama',
    title_color: 0,
    box1_text: 'yo mama house',
    box1_color: 1
};

function titleStuff()
{
    //this clears the title of default text
    if(document.getElementById("titleText").innerText == "Title of Post"){
        document.getElementById("titleText").innerText = "";
    }
    
    //when enter is pressed it changes to the text area
    document.getElementById("titleText").addEventListener("keypress",function(event){
        if (event.key == "Enter"){
            //console.log("enter event");
            event.preventDefault(); // stops new line in the title
            document.getElementById("entry1").focus(); // changes focus to the text area
            return false;
        }
    });

}

//this will rearrange the title bar and text area.
//if you add more elements pass this function an array with the order of the 
//elements you want to use
// eg t1click([1,2,0]) will change the current order where the first element is now at the end
function t1click()
{
    var wrapper = document.getElementsByClassName("dispTemplate");
    var items = wrapper[0].children;
    var elements = document.createDocumentFragment();
    var arr = [1,0];
  
    arr.forEach(function(idx) {
        elements.appendChild(items[idx].cloneNode(true));
    });

    wrapper[0].innerHTML = null;
    wrapper[0].appendChild(elements);

    //why are you guys starting a 1 for your templates are there going to be more in the future?
    if(displayInfo.template_id == 1)
    {
        displayInfo.template_id = 2;
        //console.log(displayInfo.template_id);
    }
    else{
        displayInfo.template_id = 1;
        //console.log(displayInfo.template_id);
    }
}




function e1click(color)
{
    document.getElementById("entry1").style.color = color
    if (color == "black") {
        displayInfo.box1_color = 1;
    }
    if (color == "green"){
        displayInfo.box1_color = 2;
    }
    if (color == "blue"){
        displayInfo.box1_color = 3;
    }
    if (color == "red"){
        displayInfo.box1_color = 4;
    }
    if (color == "yellow"){
        displayInfo.box1_color = 5;
    }
    if (color == "orange"){
        displayInfo.box1_color = 6;
    }
}


function upDateTimeSet()
{
    document.getElementById("updateTime").innerText = null;
    document.getElementById("updateTime").innerText = setTime();
}
/*
*this is an annoying way to make a 12 hour clock on the time update.
*could/did not want to figure out how to embed the function in the assignment of the text
*/
function setTime()
{   
    var currentDate =  new Date();
    var timeH = "";
    var timeM = "";
    if (currentDate.getHours() % 12 == 0){
        timeH = "12";
    }
    else{
        timeH = currentDate.getHours()
    }
    
    if(currentDate.getMinutes()< 10){
        timeM = "0" + currentDate.getMinutes();
    }
    else
    {
        timeM = currentDate.getMinutes();
    }
    return "Last Update: " + timeH + ":" + timeM;
}

function updateDisplayInfo()
{
    displayInfo.title_text = document.getElementById("titleText").innerText;
    displayInfo.box1_text = document.getElementById("entry1").value;
}

function postInfo()
{
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://eos-services.onu.edu:5000/api/user";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(displayInfo));
}

function submitClick()
{
    console.log("submit click");
    upDateTimeSet();
    updateDisplayInfo();
    //postInfo();
    // console.log(displayInfo.title_text);
    // console.log(displayInfo.box1_text);
    console.log(displayInfo);

}
