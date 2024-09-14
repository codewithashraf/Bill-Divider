const userInput = document.querySelector("#userInput");
const customTipInput = document.querySelector(".custom-input");
const numberOfPeopleInput = document.querySelector(".num-of-people");
const resetBtn = document.querySelector('#reset-btn')

const generateBtn = document.querySelector(".generate-btn");
const tipContainer = document.querySelector(".tip-container");

const tipAmountOutput = document.querySelector(".tip-amount span");
const totalOutput = document.querySelector(".total span");
const eachPersonOutput = document.querySelector(".each-person-bill span");

let tipPercentage = 0;

generateBtn.addEventListener("click", () => {
  const billAmount = parseInt(userInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const tipAmount = (tipPercentage = (billAmount * tipPercentage) / 100);

  totalOutput.innerText = Math.round(billAmount + tipAmount);
  eachPersonOutput.innerText = Math.round((billAmount + tipAmount) / numberOfPeople);
  tipAmountOutput.innerText = Math.round(tipAmount);

  resetBtn.disabled = false;
  generateBtn.disabled = true;
  userInput.disabled = true;
  tipContainer.classList.add('disabled');
  numberOfPeopleInput.disabled = true;
  customTipInput.disabled = true;
});

tipContainer.addEventListener("click", (e) => {
  if (tipContainer.classList.contains("disabled")) return;
  if (e.target !== tipContainer) {
    [...tipContainer.children].forEach((elem) => {
      elem.classList.remove("selected");
    });
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText);
    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  tipPercentage = parseInt(customTipInput.value);
  [...tipContainer.children].forEach((elem) => {
    elem.classList.remove("selected");
  });
});

userInput.addEventListener("input", () => {
  if (userInput.value) {
    tipContainer.classList.remove("disabled");
    customTipInput.disabled = false;
    numberOfPeopleInput.disabled = false;
  } else {
    tipContainer.classList.add("disabled");
    customTipInput.disabled = true;
    numberOfPeopleInput.disabled = true;
  }
});

numberOfPeopleInput.addEventListener("input", () => {
  if (numberOfPeopleInput.value >= 1) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
});

resetBtn.addEventListener('click', () => {
  totalOutput.innerText = '';
  eachPersonOutput.innerText = '';
  tipAmountOutput.innerText = '';

  resetBtn.disabled = true;

  userInput.disabled = false;
  userInput.value = '';

  [...tipContainer.children].forEach((elem) => {
    elem.classList.remove("selected");
  });

   numberOfPeopleInput.value = '';

})
