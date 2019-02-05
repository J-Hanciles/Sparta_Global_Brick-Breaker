document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
console.log("Hello");
function theMidBrick(){


  var brick = ["midblock1", "midblock2", "midblock3", "midblock4", "midblock5", "midblock6", "midblock7", "midblock8", "midblock9", "midblock10", "midblock11", "midblock12"];
  var i = 0;
  var brickmove = 0;
  var bricktrail = 0;
  var j = 0;

  brickmove = setInterval(function meh(){
    document.getElementById(brick[i]).style.backgroundColor = "firebrick";
    document.getElementById(brick[j]).style.backgroundColor = "darkgrey";

    // console.log(brick[i]);
    // console.log(brick[j]);
    i=i+1;
    j=i-1;
    if(i==10) {
      i=0
    }
  }, 500);
}

theMidBrick()
});
