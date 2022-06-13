// User Form
var main = document.getElementById("main");
var display = document.getElementById("display");

function foo(){
    var center = document.querySelector(".center");
    var clas = document.querySelector(".input");
    var lab  = clas.getElementsByTagName("label");
    var inp  = clas.getElementsByTagName("input");
    var fill = document.getElementsByClassName("fill");
    var flag = false;
 for(var i = 0 ; i < inp.length ; i++){
     if(!inp[i].value){
         lab[i].style.borderBottom = "2px solid #E62020"
         inp[i].value  = ""
        }
    } 
    for(var i = 0 ; i < inp[1].value.length ; i++ ){

        if(inp[1].value.charAt(i)  == "@"){
            center.style.display = "none"
            flag == true
            display.style.display = "flex"
            main.style.display = "block"
            fill[0].innerHTML += inp[0].value
            fill[1].innerHTML += inp[1].value 
        }
    }
    if(flag === false){
         lab[1].style.borderBottom = "2px solid #E62020"   
    }     
}

var correct = document.getElementById("correct");
var quiz = [
    {
        num : 1,
        question : "Qus : What is the capital of Pakistan",
        option : {
            a : "Karachi",
            b : "Lahore",
            c : "Islamabad",
            d : "Multan"
        },
        ans:  "Islamabad"
    },
    {
        num : 2,
        question : "Qus : The Founder of pakistan",
        option : {
            a : "Quaid-e-Azam",
            b : "Allama Iqbal",
            c : "Liaquat Ali Khan",
            d : "Tipu Sultan"
        },
        ans:  "Quaid-e-Azam"
    },
    {
        num : 3,
        question : "Qus : How many month in year have",
        option : {
            a : "19",
            b : "8",
            c : "12",
            d : "9"
        },
        ans:  "12"
    },
    {
        num : 4,
        question : "Qus : How many day in week have",
        option : {
            a : "10",
            b : "15",
            c : "9",
            d : "7"
        },
        ans:  "7"
    },
    {
        num : 5,
        question : "Qus : How many prayer have a day",
        option : {
            a : "10",
            b : "8",
            c : "5",
            d : "3"
        },
        ans:  "5"
    },
    {
        num : 6,
        question : "Qus : The Color of Sky is",
        option : {
            a : "Red",
            b : "Green",
            c : "Blue",
            d : "Pink"
        },
        ans:  "Blue"
    },
    {
        num : 6,
        question : "Qus : The flag color of pakistan",
        option : {
            a : "White,Green",
            b : "White,Orange",
            c : "Pink,white",
            d : "Blue,White"
        },
        ans:  "White,Green"
    }
]
var all = 0;
var getp = document.getElementById("get");
var btn = document.getElementById("btn");
var count = 0;
var op = document.getElementById("opt");
var li = op.getElementsByTagName("li");
var result = document.getElementById("result");
var corr = 0;


function check(e){

    if(e.innerHTML == quiz[count].ans){
        e.className = " foo"
        corr++
       all+=10
        for (let index = 0; index < li.length; index++) {
                li[index].className += " event"
      }
    }
    else{
        e.className = "foo1"
        
for (let index = 0; index < li.length; index++) {
   if(li[index].innerHTML == quiz[count].ans){
       li[index].className = "foo"
   }
   li[index].className += " event"
}
}
btn.style.visibility = "visible"
}
    
function load(){
     var qus = document.getElementById("qus");
     qus.innerHTML = quiz[count].question;
          li[0].innerHTML = quiz[count].option.a 
          li[1].innerHTML = quiz[count].option.b 
          li[2].innerHTML = quiz[count].option.c 
          li[3].innerHTML = quiz[count].option.d 
         
        }
        var done = document.getElementById("done");
    function button(){
        count++
        btn.style.visibility = "hidden"
        load()
        getp.innerHTML = count+1 +" / "+ quiz.length 
        for(var i = 0 ; i < li.length ; i++){
            li[i].className = "pop"
        }
        if(count >= quiz.length-1){
             main.style.display = "none"
             display.style.display = "none"
             done.style.display = "block"
            result.innerHTML += all
            correct.innerHTML += corr
             count = 0;
        }
    }
   
