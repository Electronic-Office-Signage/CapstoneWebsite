// comment

// okay so it's better that you havea a comma sepearated list, ask tim for specifics
// color variables, font variables, template type


let currentDate =  new Date();

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
        console.log(displayInfo.template_id);
    }
    else{
        displayInfo.template_id = 1;
        console.log(displayInfo.template_id);
    }
}




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

function upDateTimeSet()
{
document.getElementById("updateTime").innerText ="Last Update: " + (currentDate.getHours() % 12) + ":" + currentDate.getMinutes();
}

function updateDisplayInfo()
{
    displayInfo.title_text = document.getElementById("titleText").innerText;
    displayInfo.box1_text = document.getElementById("entry1").value;
}

function submitClick()
{
    console.log("submit click");
    upDateTimeSet();
    updateDisplayInfo()
    var textareatext =  document.getElementById("entry1");
    displayInfo.box1_text = textareatext.value;
    console.log(displayInfo.title_text);
    console.log(displayInfo.box1_text);
    //var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    //var theUrl = "http://eos-services.onu.edu:5000/api/user";
  //  xmlhttp.open("POST", theUrl);
 //   xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xmlhttp.send(JSON.stringify(displayInfo));
}

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
