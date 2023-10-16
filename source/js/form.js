const formBtn = document.getElementById("form-submit-button");

const firstNameInput = document.getElementById("form-first-name-input");
const lastNameInput = document.getElementById("form-last-name-input");
const midNameInput = document.getElementById("form-mid-name-input");

const phoneInput = document.getElementById("form-phone-input");
const emailInput = document.getElementById("form-email-input");

const impressionPlusCheckbox = document.getElementById("form-impression-plus");
const impressionMinusCheckbox = document.getElementById(
  "form-impression-minus"
);
const impressionHesitantCheckbox = document.getElementById(
  "form-impression-hesitant"
);

const formFailure = document.getElementById("form-failure");
const formSuccess = document.getElementById("form-success");

formBtn.addEventListener("click", () => {
  const first = firstNameInput.value;
  const last = lastNameInput.value;
  const mid = midNameInput.value;

  const phone = phoneInput.value;
  const email = emailInput.value;

  const plus = impressionPlusCheckbox.checked;
  const minus = impressionMinusCheckbox.checked;
  const hesitant = impressionHesitantCheckbox.checked;

  const allInputsFilled = first && last && mid && phone && email;
  const someChecked = plus || minus || hesitant;

  if (!allInputsFilled || !someChecked) {
    formFailure.classList.add("show-form");
    formSuccess.classList.remove("show-form");
  } else {
    formFailure.classList.remove("show-form");
    formSuccess.classList.add("show-form");
  }
});
