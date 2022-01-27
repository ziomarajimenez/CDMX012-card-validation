//Import the object validator from the validator.js file
import validator from "./validator.js";

//Select input
const creditCardNumber = document.getElementById("input");
let verify = document.getElementById("verify");

// function verificar() {
//   console.log(
//     validator.isValid(creditCardNumber.value),
//     validator.maskify(creditCardNumber.value)
//   );
//   let resIsValid = validator.isValid(creditCardNumber.value);
//   let resMaskify = validator.maskify(creditCardNumber.value);

//   creditCardNumber.value = resMaskify;
//   if (resIsValid) {
//     document.getElementById("valido").style.display = "block";
//     document.getElementById("input").style.borderColor = "green";
//     document.getElementById("invalido").style.display = "none";
//   } else {
//     document.getElementById("valido").style.display = "none";
//     document.getElementById("input").style.borderColor = "red";
//     document.getElementById("invalido").style.display = "block";
//   }
// }

//Add event listener
verify.addEventListener("click", function () {
  console.log(
    validator.isValid(creditCardNumber.value),
    validator.maskify(creditCardNumber.value)
  );
  let resIsValid = validator.isValid(creditCardNumber.value);
  let resMaskify = validator.maskify(creditCardNumber.value);

  creditCardNumber.value = resMaskify;
  console.log(resIsValid, resMaskify);
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
