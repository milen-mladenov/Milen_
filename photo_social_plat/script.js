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

function registrationVerification() {
  let user = {};
  let userFirstName = document.getElementById("user_first_name");
  let userLastName = document.getElementById("user_last_name");
  let userCountry = document.getElementById("country_select");
  let userCity = document.getElementById("user_city");
  let userEmail = document.getElementById("user_email");
  let userEmailConfirm = document.getElementById("user_email_confirm");
  let userPassword = document.getElementById("user_password");
  let userPasswordConfirm = document.getElementById("user_password_confirm");
  let userDescription = document.getElementById("user_descrtiption");

  let testsPassed = true;

  let letterTest = /^[A-Za-z]+$/;
  let userNameTest = letterTest.exec(userFirstName.value);
  let lastNameTest = letterTest.exec(userLastName.value);
  let cityTest = letterTest.exec(userCity.value);

  if (!userFirstName.value.length >= 2 || !userNameTest) {
    userFirstName.style.borderColor = "red";
    testsPassed = false;
  }
  if (!userLastName.value.length >= 2 || !lastNameTest) {
    userLastName.style.borderColor = "red";
    testsPassed = false;
  }
  if (userCountry.value == "select country") {
    userCountry.style.borderColor = "red";
    testsPassed = false;
  }
  if (!userCity.value.length >= 3 || !cityTest) {
    userCity.style.borderColor = "red";
    testsPassed = false;
  }

  if (!emailVerification(userEmail, userEmailConfirm)) {
    userEmail.style.borderColor = "red";
    userEmailConfirm.style.borderColor = "red";
    testsPassed = false;
  }

  if (
    userPassword.value !== userPasswordConfirm.value ||
    userPassword.value == ""
  ) {
    userPassword.style.borderColor = "red";
    userPasswordConfirm.style.borderColor = "red";
    testsPassed = false;
  }


  if (testsPassed) {
    user.firstName = userFirstName.value;
    user.lastName = userLastName.value;
    user.userCountry = userCountry.value;
    user.city = userCity.value;
    user.email = userEmail.value;
    user.password = userPassword.value;
    user.description = userDescription;

    clearRegistration();
    return user;
  }

  return;

}


function clearRegistration() {
  let userFirstName = document.getElementById("user_first_name");
  let userLastName = document.getElementById("user_last_name");
  let userCountry = document.getElementById("country_select");
  let userCity = document.getElementById("user_city");
  let userEmail = document.getElementById("user_email");
  let userEmailConfirm = document.getElementById("user_email_confirm");
  let userPassword = document.getElementById("user_password");
  let userPasswordConfirm = document.getElementById("user_password_confirm");
  let userDescription = document.getElementById("user_descrtiption");

  userFirstName.value = "";
  userLastName.value = "";
  userCountry.value = "";
  userCity.value = "";
  userEmail.value = "";
  userEmailConfirm.value = "";
  userPassword.value = "";
  userPasswordConfirm.value = "";
  userDescription.value = "";

  userFirstName.style.border = "none";
  userLastName.style.border = "none";
  userCountry.style.border = "none";
  userCity.style.border = "none";
  userEmail.style.border = "none";
  userEmailConfirm.style.border = "none";
  userPassword.style.border = "none";
  userPasswordConfirm.style.border = "none";
  userDescription.style.border = "none";
}
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

