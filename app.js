//Access input field
const productInputElement = document.getElementById("product-name");
// console.log(productInputElement);
//Access span chars
const remainingCharsElement = document.getElementById("remaining-chars");
// console.log(remainingCharsElement);
//Max chars from span select
const maxAllowedChars = productInputElement.maxLength;
// console.log(maxAllowedChars);

function updateRemainingChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  //   console.log(enteredText);
  //   console.log(enteredTextLength);
  const remainingCharacters = maxAllowedChars - enteredTextLength;
  //   console.log(remainingCharacters);
  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productInputElement.classList.remove("warning");
  }
}

productInputElement.addEventListener("input", updateRemainingChars);
