var a = 20;
{
    // above a and below a is has same memory allocation.
    var a = 10;
    document.getElementById("varExample").innerHTML = "The value of a is: " + a;
}
document.getElementById("varExample").innerHTML = "The value of a is: " + a;

let b = 20;
{
    // above b and below b is has different memory allocation.
    let b = 10;
    document.getElementById("letExample").innerHTML = "The value of b is: " + b;
}
document.getElementById("letExample").innerHTML = "The value of b is: " + b;

const c = 30;
// it will through an error.
// c = 10;

function onchange_ex() {
    var inputValue = document.getElementById("textInput").value;
    document.getElementById("result").innerHTML = inputValue;
  }

function onclk(){
    alert("Hello World");
}

function changeColor(color) {
    document.getElementById('hoverDiv').style.backgroundColor = color;
}

const nm = ["Tony", "Rita", "Tina"];
let size = nm.length;
document.getElementById("arrlen").innerHTML = size;

const gadgets = ["SmartWatch", "laptop", "tablet"];
document.getElementById("arrpop1").innerHTML = gadgets;
gadgets.pop();
document.getElementById("arrpop2").innerHTML = gadgets;

const gadgets1 = ["SmartWatch", "laptop", "tablet"];
document.getElementById("arrpush1").innerHTML = gadgets1;
gadgets1.push("SmartPhone");
document.getElementById("arrpush2").innerHTML = gadgets1;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits1;
let Size = fruits1.at(1);
document.getElementById("demo2").innerHTML = Size;

const nm1 = ["Tony", "Rita", "Tina"];
document.getElementById("demo3").innerHTML = nm1;
nm1.splice(2, 0, "john", "jony");
document.getElementById("demo4").innerHTML = nm1;



