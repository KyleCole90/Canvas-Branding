var selectElement = document.getElementById("user_pronouns");

// Disable the select element
selectElement.disabled = true;

// Loop through the options and disable them
var options = selectElement.getElementsByTagName("option");
for (var i = 0; i < options.length; i++) {
  options[i].disabled = true;
}