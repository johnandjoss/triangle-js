var triangleTracker = function(side1, side2, side3) {
  var side1 = parseInt(side1);
  var side2 = parseInt(side2);
  var side3 = parseInt(side3);

  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return "not a triangle";
  } else if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    return "isoceles";
  } else {
    return "scalene";
  }

};

$(document).ready(function() {
  $("form#tri").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if(triangleTracker(side1, side2, side3) === "not a triangle") {
      $("#not").show();
      $("#result").hide();
    } else {
      $("#result").show();
      $(".triangle").text(triangleTracker(side1, side2, side3));
    }
    event.preventDefault();
  });




});
