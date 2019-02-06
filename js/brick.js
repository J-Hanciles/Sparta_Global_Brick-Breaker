document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
console.log("Hello");
  var brick = ["midblock1", "midblock2", "midblock3", "midblock4", "midblock5", "midblock6", "midblock7", "midblock8", "midblock9", "midblock10", "midblock11", "midblock12"];

function theMidBrick(){
  var i = 0;
  var brickmove = 0;
  var j = 0;

  brickmove = setInterval(function meh(){
    document.getElementById(brick[i]).style.backgroundColor = "firebrick";
    document.getElementById(brick[j]).style.backgroundColor = "darkgrey";

    // console.log(brick[i]);
    // console.log(brick[j]);
    i=i+1;
    j=i-1;
    if(i==10) {
        console.log("Game Over");
      i=0
    }
  }, 250);
}

theMidBrick()

// var playermidpunch;

// document.getElementById('highbtn').addEventListener('click', highPunch);
//
// function highPunch(){
//   console.log("Punch");
// }

  // document.getElementById('midblock10').addEventListener("leftarrow");
  // document.getElementById('midblock10').style.backgroundColor = "royalblue";

// function highpunch(event){
//   var hpunch = event.keyDown;
//
// }

// document.onkeydown = function (event) {
//   if (event) {
//
//   }
// }
function checkKey(e) {
    e = e || window.event;
    console.log(e.keyCode);
}

document.onkeydown = checkKey;


});
