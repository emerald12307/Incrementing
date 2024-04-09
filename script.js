// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);
function add1() {
  counter = counter++;
  displayEl.innerHTML = counter;
}

function add10() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);

function updateStory() {
  var newWord = stringInEl.value;
  var story = "Once upon a time, ";
  stringInEl.value = " ";

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");
var rand1Inp = document.getElementById("rand-in1");
var rand2Inp = document.getElementById("rand-in2");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.floor(Math.random() * 100 - 0);
  rand2OutEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.floor(Math.random() * (5 - -5 + 1) + -5);
  rand3OutEl.innerHTML = rand;
}

rand4Btn.addEventListener("click", showRand4);

function showRand4() {
  let randInp1 = rand1Inp.value;
  let randInp2 = rand2Inp.value;
  var rand = Math.floor(Math.random() * (randInp2 - randInp1 + 1) + randInp1);
  rand4OutEl.innerHTML = rand;
}

//Random CSS
var randSizeBtn = document.getElementById("random-size");
var randColorBtn = document.getElementById("random-rgb");
var resetBtn = document.getElementById("reset");
var bodyEl = document.getElementById("body");
var htmlEl = document.getElementById("HTML");

randSizeBtn.addEventListener("click", changeToRandSize);

function changeToRandSize() {
  var rand = Math.floor(Math.random() * 25 - 5);
  bodyEl.style.fontSize = rand + "px";
}

randColorBtn.addEventListener("click", changeToRandColor);

function changeToRandColor() {
  var randR = Math.floor(Math.random() * 255 + 0);
  var randB = Math.floor(Math.random() * 255 + 0);
  var randG = Math.floor(Math.random() * 255 + 0);
  var randColor = `rgb(${randR} ,${randG},${randB})`;
  htmlEl.style.background = randColor;
}

resetBtn.addEventListener("click", resetPage);

function resetPage() {
  bodyEl.style.fontSize = "16px";
  htmlEl.style.background = "#9ae4c8";
  displayEl.innerHTML = 0;
  stringOutEl.innerHTML = "Once upon a time,";
  rand1OutEl.innerHTML = "----------";
  rand2OutEl.innerHTML = "----------";
  rand3OutEl.innerHTML = "----------";
  rand4OutEl.innerHTML = "----------";
  rand1Inp.value = "";
  rand2Inp.value = "";
}
