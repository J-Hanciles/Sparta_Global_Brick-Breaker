document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
console.log("Hello");
  var brick = ["midblock1", "midblock2", "midblock3", "midblock4", "midblock5", "midblock6", "midblock7", "midblock8", "midblock9", "midblock10", "midblock11", "midblock12"];


function theMidBrick(){
  var i = 0;
  var brickmove = 0;
  var j = 0;
  var brickblock = 0;

  brickmove = setInterval(function meh(){
    document.getElementById(brick[i]).style.backgroundColor = "red";
    document.getElementById(brick[j]).style.backgroundColor = "darkgrey";

    document.onkeydown = function playermidpunch(event){
      if (event.keyCode == 37) {
        document.getElementById("midblock10").style.backgroundColor = "royalblue";
      }
    }

    i=i+1;
    j=i-1;



    if(i==11) {
      alert("Game Over");
      i=0
    }
  }, 250);


}

theMidBrick()

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
// if("midblock10".style.backgroundColor = "royalblue"){
//   i=0
// }else{
//   "midblock10".style.backgroundColor = "firebrick";
//   console.log("Game Over");
//   clearsetinterval();
// }
