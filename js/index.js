document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
  function theBrick(){


    var brick = ["midblock1", "midblock2", "midblock3", "midblock4", "midblock5", "midblock6", "midblock7", "midblock8", "midblock9", "midblock10", "midblock11", "midblock12"];
    var i = 0;
    var brickmove = 0;
    var bricktrail = 0;
    var j = 0;

    brickmove = setInterval(function meh(){
      document.getElementById(brick[i]).style.backgroundColor = "firebrick";
      document.getElementById(brick[j]).style.backgroundColor = "darkgrey";

      console.log(brick[i]);
      console.log(brick[j]);
      i=i+1;
      j=i-1;
      if(i==12) {
        i=0
      }

    }, 500);

    // bricktrail = setInterval(function delay(){
    //   document.getElementById(brick[i]).style.backgroundColor = null;
    //   i=i+1;
    //   if(i==12) {
    //     clearInterval(bricktrail);
    //   }
    // }, 1000);

    // brickmove = setInterval(function meh(){
    //   document.getElementById(brick[i]).style.backgroundColor = "darkgrey";
    //   i=i+1;
    //   if(i===12) {
    //     clearInterval(i);
    //   }
    // }, 1000);

    // for (var i = 12; i >= 0; i--) {
    // var id = "midblock" + i;
    // console.log(document.getElementById(id));
    // }

    // document.getElementById(meh()).style.backgroundColor = "firebrick";

    //
    // for(var i = 12; i >= 1; i-- ){
    //   (function(i) {
    //     setInterval(function(){
    //       var id = i;
    //       console.log(id)
    //     }, 5000)
    //   })(i);
    //   }
      // var id = "midblock" + i;
      // console.log(id);
      // document.getElementById(id).style.backgroundColor = "firebrick";
      // document.getElementById(id+1).style.backgroundColor = "white";

    }

  //   var list = [1, 2, 3, 4, 5];
  //
  //   for (var i = 0, len = list.length; i < len; i += 1) {
  //       (function(i) {
  //           setInterval(function() {
  //               list[i] += 10;
  //               console.log(i + "=>" + list[i] + "\n");
  //           }, 5000)
  //       })(i);
  //   }
  //
  //   var setInterval(function {
  //
  //     var setTimeout(function () {
  //       for(var i = 12; i >= 1; i-- ){
  //         var id = "midblock" + i;
  //         console.log(id);
  //         document.getElementById(id).style.backgroundColor = "firebrick";
  //
  //       }
  //     }, 1000);
  //
  //   }, 1000);
  // }

  theBrick()

});
