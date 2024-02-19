function solarButton() {
  var button = document.getElementById("solar");
  var content = document.getElementById("solar-content");
  var windContent = document.getElementById("wind-content");
  var windButton = document.getElementById("wind");
  if (button.className === "solar") {
    button.className += " color";
  } else {
    button.className = "solar";
  }
  content.classList.toggle("show");
  windContent.classList.remove("show");
  windButton.classList.remove("color");
  content.scrollIntoView(true);
};

function windButton() {
  var button = document.getElementById("wind");
  var content = document.getElementById("wind-content");
  var solarContent = document.getElementById("solar-content");
  var solarButton = document.getElementById("solar");
  if (button.className === "wind") {
    button.className += " color";
  } else {
    button.className = "wind";
  }
  content.classList.toggle("show");
  solarContent.classList.remove("show");
  solarButton.classList.remove("color");
  content.scrollIntoView(true);
};