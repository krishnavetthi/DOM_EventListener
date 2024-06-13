const clickElement = document.getElementById("box");

// add a click event listener to the element
clickElement.addEventListener("click", function () {
  alert("you just clicked me 👍");
});

const doubleclickElement = document.getElementById("box1");
// add a doubleclick event listener to the element
doubleclickElement.addEventListener("dblclick", function () {
  alert("you just double clicked me 👍");
});

const mouseoverElement = document.getElementById("box2");
// add a mouseover event listener to the element
mouseoverElement.addEventListener("mouseover", function () {
  alert(
    "you entered in Restricted Area 🙅 (mouse over event is working properly)"
  );
});

const mouseoutElement = document.getElementById("box3");
// add a mouseout event listener to the element
mouseoutElement.addEventListener("mouseout", function () {
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});

let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')
// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})

let container = document.getElementById("container");
let display1 = document.getElementById("display1");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display1.style.color = "red";
  display1.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display1.style.color = "green";
  display1.innerText = e.key + " is keyUp";
});