var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("Well, you can leave. Whenever.");
  story.innerHTML = "Goodbye."
  opt1.innerHTML = "";
  opt2.innerHTML = "";
}

function play() {
  name = prompt("What is your name, brave warrior?");
  story.innerHTML = "Welcome, " + name +". The king has summoned you. What do you do?";
  opt1.innerHTML = "Go see the king";
  opt1.onclick = function() {king()};
  opt2.innerHTML = "Keep sleeping";
  opt2.onclick = function() {sleep()};
}

function king() {
   story.innerHTML = "The king tells you to go slay the dragon!";
  opt1.innerHTML = "Fight the dragon!";
  opt1.onclick = function() {fightDragon()};
  opt2.innerHTML = "Train";
  opt2.onclick = function() {train()};
}

function sleep() {
  story.innerHTML = "You arrested in your bed. The king throws you into jail.";
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {play()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}