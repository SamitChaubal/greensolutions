/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNavBar(y) {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  y.classList.toggle("change");
}

