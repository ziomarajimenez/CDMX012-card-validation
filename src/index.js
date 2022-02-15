//Import the object validator from the validator.js file
import validator from "./validator.js";

//Select input
const creditCardNumber = document.getElementById("input");
let verify = document.getElementById("verify");

//Add event listener to call both functions
verify.addEventListener("click", function () {
  let resIsValid = validator.isValid(creditCardNumber.value);
  let resMaskify = validator.maskify(creditCardNumber.value);

  //Verify if it is a valid credit card and show the correct messages on the screen
  creditCardNumber.value = resMaskify;
  if (resIsValid) {
    document.getElementById("valido").style.display = "block";
    document.getElementById("input").style.borderColor = "green";
    document.getElementById("invalido").style.display = "none";
  } else {
    document.getElementById("valido").style.display = "none";
    document.getElementById("input").style.borderColor = "red";
    document.getElementById("invalido").style.display = "block";
  }
});

