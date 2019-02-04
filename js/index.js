document.addEventListener("DOMContentLoaded", function(){
// $(document).ready(function() {
  function theBrick(){
    document.getElementById("midblock12").style.backgroundColor = "firebrick"

    var brick = [midblock1, midblock2, midblock3, midblock4, midblock5, midblock6, midblock7, midblock8, midblock9, midblock10, midblock11, midblock12];
    var i = 12;
    setInterval( function meh(){
      console.log(brick[i-- % brick.length]);

    }, 1000);


      document.getElementById(meh()).style.backgroundColor = "firebrick";
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
