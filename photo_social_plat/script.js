import * as inputCheck from "./scripts/formValidation.js";

const userFirstName = document.getElementById("first_name_input_field");
const userLastName = document.getElementById("last_name_input_field");
const userEmail = document.getElementById("email_input_field");
const userEmailConfirm = document.getElementById(
  "email_input_field_confirmation"
);
const userPassword = document.getElementById("user_password_input");
const userPasswordConfirm = document.getElementById(
  "user_password_input_confirmation"
);
const userCountry = document.getElementById("user_country_input");
const userCity = document.getElementById("user_city_input");

const formSubmitButton = document.querySelector("form button");
const moreInfoCheckbox = document.getElementById("more_info_checkbox");

class User {
  constructor(user, email, password) {
    this.user = user;
    this.email = email;
    this.password = password;
  }

  moreUserInfo(moreInformation) {
    this.more = moreInformation;
  }

}

moreInfoCheckbox.addEventListener("change", () => {
  let additionalInfoSection = document.getElementById(
    "additional_information_form"
  );

  if (moreInfoCheckbox.checked) {
    additionalInfoSection.style.display = "flex";
    return;
  }
  additionalInfoSection.style.display = "none";

  console.log(userPassword.value);
});

formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!formValidation()) {
    return;
  }
});

function formValidation() {
  let nameCheck = inputCheck.nameValidation(userFirstName, userLastName);
  let emailCheck = inputCheck.emailValidation(userEmail, userEmailConfirm);
  let locationCheck = inputCheck.locationValidation(userCountry, userCity);
  let passwordCheck = inputCheck.passwordValidation(
    userPassword,
    userPasswordConfirm
  );

  if (nameCheck) {
    document.querySelector("#first_name_label .error_msg").textContent = ``;
    document.querySelector("#last_name_label .error_msg").textContent = ``;
  }
  if (emailCheck) {

    document.querySelector("#email_label .error_msg").textContent = ``;
    document.querySelector("#email_confirm .error_msg").textContent = ``;
  }
  if (passwordCheck) {
    document.querySelector(
      "#password_input .error_msg"
    ).textContent = ``;
    document.querySelector(
      "#password_input_confirmation .error_msg"
    ).textContent = ``;
  }
  if (locationCheck) {
    document.querySelector(
      "#country_select .error_msg"
    ).textContent = ``;
    document.querySelector(
      "#user_city .error_msg"
    ).textContent = ``;
  }

  let passedValidation =
    nameCheck && emailCheck && locationCheck && passwordCheck;

  if (passedValidation) createUser();
}

function createUser() {
  let moreInformation = [];
  let country = userCountry.value;
  let city = userCity.value;

  let user = `${userFirstName.value} ${userLastName.value}`;
  let password = `${userPassword.value}`;
  let email = `${userEmail.value}`;
  let user1 = new User(user, email, password);

  if (moreInfoCheckbox.checked) {
    moreInformation.push(inputCheck.moreInformation());
    moreInformation.push({ country, city });
  }


  user1.moreUserInfo(moreInformation)
  console.log(user1);
}


const photoUploadForm = document.getElementById("photo_upload_form");
const registrationForm = document.getElementById("registration_form");
const authorShowcase = document.getElementById("author_showcase_profiles");
const lightboxWithComments = document.getElementById("lightbox_comments");

const commentSection = document.getElementById("comment_section");
const newCommentForm = document.getElementById("new_comment");
const comments = document.getElementById("comments");

const registerSubmitButton = document.getElementById("submit_registration");
const registerSubmitButtonclear = document.getElementById("clear_registration");


registerSubmitButton.addEventListener("click", registrationVerification);
registerSubmitButtonclear.addEventListener("click", clearRegistration)


function emailVerification(email, confirm) {
  email = email.value;
  confirm = confirm.value;
  let emailPattern = /^[A-Za-z]+\@[A-Za-z]+\.[\w]{2,}$/;
  let emailTest = emailPattern.exec(email) && emailPattern.exec(confirm);

  if (email == confirm && emailTest) {
    return true;
  } else {
    return false;
  }
}

