var number = document.getElementById("num").innerHTML;

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