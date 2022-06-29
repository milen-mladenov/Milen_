function nameValidation(userFirstName, userLastName) {
  let nameIsTrue = true;
  let firstName = userFirstName.value;
  let lastName = userLastName.value;

  let namePattern = /^[A-Za-z]+$/;
  let firstOnlyLetters = namePattern.exec(firstName);
  let lastOnlyLetters = namePattern.exec(lastName);

  // check if name has numbers and length > 2
  try {
    if (firstName == "") throw Error("Please fill up the field!");
    if (userFirstName.length <= 2) throw Error("Name is too short!");
    if (firstOnlyLetters == null) throw Error("Name must not contain numbers!");
  } catch (e) {
    nameIsTrue = false;
    document.querySelector(
      "#first_name_label .error_msg"
    ).textContent = `${e.message}`;
  }

  try {
    if (lastName.value == "") throw Error("Please fill up the field");
    if (lastName.length <= 2) throw Error("Name is too short");
    if (lastOnlyLetters == null) throw Error("Name must not contain numbers!");
  } catch (e) {
    nameIsTrue = false;
    document.querySelector(
      "#last_name_label .error_msg"
    ).textContent = `${e.message}`;
  }

  return nameIsTrue;
}

function emailValidation(userEmail, userEmailConfirm) {
  let emailPattern = /^\w+@[A-Za-z]+.[A-Za-z]{2,}$/;
  let emailIsTrue = true;
  let email = userEmail.value;
  let confirmation = userEmailConfirm.value;

  // confirming email is a valid input
  try {
    if (email == "") throw Error("Please fill up the field");
    if (emailPattern.exec(email) == null) throw Error("not email");
  } catch (e) {
    emailIsTrue = false;
    document.querySelector(
      "#email_label .error_msg"
    ).textContent = `${e.message}`;
  }

  // confirming the emails are the same
  try {
    if (confirmation == "") throw Error("Please fill up the field");
    if (confirmation !== email) throw Error("emails not the same");
  } catch (e) {
    emailIsTrue = false;
    document.querySelector(
      "#email_confirm .error_msg"
    ).textContent = `${e.message}`;
  }

  return emailIsTrue;
}

function passwordValidation(userPassword, userPasswordConfirm) {
  let passwordIstrue = true;
  let password = userPassword.value;
  let confirmation = userPasswordConfirm.value;
  try {
    if (password.length < 8)
      throw Error("Password must be at least 8 symbols!");
    if (!capitalLetter(password))
      throw Error("Password must have at least one capital letter");
    if (!special(password))
      throw Error("Password must have at least one special cymbol");
    if (!number(password))
      throw Error("Password must have at least one number");
  } catch (e) {
    passwordIstrue = false;
    document.querySelector(
      "#password_input .error_msg"
    ).textContent = `${e.message}`;
  }

  try {
    if (password !== confirmation) throw Error("Passwords don't match");
  } catch (e) {
    passwordIstrue = false;
    document.querySelector(
      "#password_input_confirmation .error_msg"
    ).textContent = `${e.message}`;
  }

  return passwordIstrue;
}

function locationValidation(userCountry, userCity) {
  let locationIsTrue = true;
  let city = userCity.value;

  try {
    if (userCountry.value == "select") throw Error("Please select a country!");
  } catch (e) {
    locationIsTrue = false;
    document.querySelector(
      "#country_select .error_msg"
    ).textContent = `${e.message}`;
  }

  try {
    if (number(city)) throw Error("Name must not contain numbers!");
    if(city == "") throw Error("Please add a valid location!")
  } catch (e) {
    locationIsTrue = false;
    document.querySelector(
      "#user_city .error_msg"
    ).textContent = `${e.message}`;
  }

  return locationIsTrue;
}

function capitalLetter(n) {
  let capitalLetterPattern = /[A-Z]{1,}/;
  let capitalLetterTrue = false;
  if (capitalLetterPattern.exec(n) !== null) {
    capitalLetterTrue = true;
  }
  return capitalLetterTrue;
}
function special(n) {
  let specialCymbolPattern = /\W+/;
  let specialCymbolTrue = false;
  if (specialCymbolPattern.exec(n) !== null) {
    specialCymbolTrue = true;
  }
  return specialCymbolTrue;
}
function number(n) {
  let numberPattern = /[0-9]+/;
  let numberTrue = false;
  if (numberPattern.exec(n) !== null) {
    numberTrue = true;
  }
  return numberTrue;
}


function moreInformation() {
    let additionalInfo = {}

    if(gender_male.checked) {
        additionalInfo.gender = "Male"
    }
    if(gender_female.checked) {
        additionalInfo.gender = "Female"
    }

    let moreInfo = document.getElementById("more_information").value;

    if(moreInfo.length > 0) {
        additionalInfo.moreUserInformation = moreInfo;
    }

    if(newsseller.checked) {
        additionalInfo.subscribtion = true;
    }
    return additionalInfo
}


export {
  nameValidation,
  emailValidation,
  locationValidation,
  passwordValidation,
  moreInformation
};
