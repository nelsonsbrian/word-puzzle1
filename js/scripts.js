$(document).ready(function() {

  $("#countUpForm").submit(function(event) {
    event.preventDefault();


    var countTo = Math.abs(parseInt($("#input1").val()));
    var countBy = Math.abs(parseInt($("#input2").val()));

    if (isNaN(countTo) || isNaN(countBy) || countTo === undefined || countBy === undefined) {
      alert("Enter a number in both fields.")
    } else if (countBy > countTo) {
      alert("Count by number needs to be smaller than count to.")
    } else {
      $(".output").append("Count to: " + countTo + "<br>");
      $(".output").append("Count by: " + countBy + "<br>");

      var loops = Math.floor(countTo / countBy);
      var runningCount = 0;
      for (i = 0; i < loops; i++) {
        runningCount += countBy;
        $(".output").append(runningCount + ", ");
      }



    }

  });


});
