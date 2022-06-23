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

