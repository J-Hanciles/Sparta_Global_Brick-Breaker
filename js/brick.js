document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
console.log("Hello");
  var midbrick = ["midblock1", "midblock2", "midblock3", "midblock4", "midblock5", "midblock6", "midblock7", "midblock8", "midblock9", "midblock10", "midblock11", "midblock12"];

  var highbrick = ["highblock1", "highblock2", "highblock3", "highblock4", "highblock5", "highblock6", "highblock7", "highblock8", "highblock9", "highblock10", "highblock11", "highblock12"];

  var lowbrick = ["lowblock1", "lowblock2", "lowblock3", "lowblock4", "lowblock5", "lowblock6", "lowblock7", "lowblock8", "lowblock9", "lowblock10", "lowblock11", "lowblock12"];

function theMidBrick(){
  var i = 0;
  var brickmove = 0;
  var j = 0;
  var brickblock = 0;

  brickmove = setInterval(function meh(){
    document.getElementById(midbrick[i]).style.backgroundColor = "firebrick";
    document.getElementById(midbrick[j]).style.backgroundColor = "darkgrey";

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

document.onkeydown = function playermidpunch(event){
  if (event.keyCode == 37) {
    document.getElementById("midblock10").style.backgroundColor = "royalblue";
  }
}

// function theHighBrick(){
//   var i = 0;
//   var brickmove = 0;
//   var j = 0;
//   var brickblock = 0;
//
//   brickmove = setInterval(function meh(){
//     document.getElementById(highbrick[i]).style.backgroundColor = "firebrick";
//     document.getElementById(highbrick[j]).style.backgroundColor = "darkgrey";
//
//     // console.log(brick[i]);
//     // console.log(brick[j]);
//     i=i+1;
//     j=i-1;
//
//     if(i==10) {
//         console.log("Game Over");
//       i=0
//     }
//   }, 250);
// }






});


// if (document.getElementById("midblock10").style.backgroundColor = "royalblue" && i==9){
//   i=0
//   console.log("break");
// } else(i>11){
//   console.log("Game Over");
// }

// switch (brickblock) {
//   case (document.getElementById("midblock10").style.backgroundColor = "royalblue" && i==9):
//     i=0;
//     break;
//   case i=10:
//         alert("Game Over");
//     break;
//   default:
// }
