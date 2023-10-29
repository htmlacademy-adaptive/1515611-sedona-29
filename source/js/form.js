//навешиваем на форму id и получаем поля форм

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

const formFailureBtn = document.getElementById("form-failure-btn");
const formSuccessBtn = document.getElementById("form-success-btn");

// 1) получаем значения и состояния из полей форм;
// 2) проверяем, все ли инпуты заполнены и записываем в константу
// 3) проверяем, чтобы были выбраны неск вариантов галочкой, где в форме предоставлен выбор
// 4) если не все инпуты заполнены или не чекнуты некоторые поля, показываем форму failure, при этом убирая показ формы success.
// 5) при обратном условии-всё наоборот

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
    formFailure.classList.remove("hide-form");
    formSuccess.classList.add("hide-form");
    formFailureBtn.addEventListener("click", () => {
      formFailure.classList.add("hide-form");
    });
  } else {
    formFailure.classList.add("hide-form");
    formSuccess.classList.remove("hide-form");
    formSuccessBtn.addEventListener("click", () => {
      formSuccess.classList.add("hide-form");
    });
  }
});
