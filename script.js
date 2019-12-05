var number = document.getElementById("num").innerHTML;
var color = ["black", "white", "#2980B9", "#884EA0", "#A6ACAF", "#117A65", "#E74C3C"];
var val=0;

function mr(){
    val++;
    if(val>6){
        val=6;
    }
    switch (val){
    case 0:
        document.getElementById("num").style.color = color[val]
        break;
    case 1:
        document.getElementById("num").style.color = color[val]
        break;
    case 2:
        document.getElementById("num").style.color = color[val]
        break;
    case 3:
        document.getElementById("num").style.color = color[val]
        break;
    case 4:
        document.getElementById("num").style.color = color[val]
        break;
    case 5:
        document.getElementById("num").style.color = color[val]
        break;
    case 6:
        document.getElementById("num").style.color = color[val]
        break;    
    case 7:
        document.getElementById("num").style.color = color[val]
        break;
        }
    console.log(val);   
}

function ls(){
    val--;
    switch (val){
    case 0:
        document.getElementById("num").style.color = color[val]
        break;
    case 1:
        document.getElementById("num").style.color = color[val]
        break;
    case 2:
        document.getElementById("num").style.color = color[val]
        break;
    case 3:
        document.getElementById("num").style.color = color[val]
        break;
    case 4:
        document.getElementById("num").style.color = color[val]
        break;
    case 5:
        document.getElementById("num").style.color = color[val]
        break;
    case 6:
        document.getElementById("num").style.color = color[val]
        break;    
    case 7:
        document.getElementById("num").style.color = color[val]
        break;
        }
    if(val<0){
        val=0;
    } 
    console.log(val);  
}

function add(){
    Number(number);
    number++;
    document.getElementById("num").innerHTML = number;
}

function key(){
    Number(number);
    number = 0;
    document.getElementById("num").innerHTML = number;
}