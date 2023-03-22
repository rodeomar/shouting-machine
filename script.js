window.onload = function() {
  let form = document.querySelector("form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  let fontSize = 13;

  form.onsubmit = function(event) {
    event.preventDefault();
    const firstNameInput = document.getElementById("firstNameInput").value.toUpperCase(); 
    const lastNameInput = document.getElementById("lastNameInput").value.toUpperCase()
    firstName.innertext = firstNameInput;
    firstName.style.fontSize = fontSize + "px"
    lastName.innertext = lastNameInput;
    lastName.style.fontSize = fontSize + "px"
    fontSize *= 4;
    document.querySelector("span#firstName").innerText = firstNameInput;
    document.querySelector("span#lastName").innerText = lastNameInput
    increaseFontSize(size)
  };
};


