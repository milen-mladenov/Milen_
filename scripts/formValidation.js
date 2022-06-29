export {
  nameValidation,
  locationValidation,
  passwordValidation,
  moreInformation
};
import * as validation from './validations.js'

function nameValidation(userFirstName, userLastName) {
  let nameIsTrue = true;
  let firstName = userFirstName.value;
  let lastName = userLastName.value;

  // check if name has numbers and length > 2
  try {
    if (firstName == "") throw Error("Please fill up the field!");
    if (userFirstName.length <= 2) throw Error("Name is too short!");
    if (validation.isOnlyLetters(firstName) == null) throw Error("Name must not contain numbers!");
  } catch (e) {
    nameIsTrue = false;
    document.querySelector(
      "#first_name_label .error_msg"
    ).textContent = `${e.message}`;
  }

  try {
    if (lastName.value == "") throw Error("Please fill up the field");
    if (lastName.length <= 2) throw Error("Name is too short");
    if (validation.isOnlyLetters(lastName) == null) throw Error("Name must not contain numbers!");
  } catch (e) {
    nameIsTrue = false;
    document.querySelector(
      "#last_name_label .error_msg"
    ).textContent = `${e.message}`;
  }
  
  return nameIsTrue;
}

function passwordValidation(userPassword, userPasswordConfirm) {
  let passwordIstrue = true;
  let password = userPassword.value;
  let confirmation = userPasswordConfirm.value;

  try {
    if (password.length < 8)
      throw Error("Password must be at least 8 symbols!");
    if (!validation.withCapitalLetter(password))
      throw Error("Password must have at least one capital letter");
    if (!validation.withSpecial(password))
      throw Error("Password must have at least one special cymbol");
    if (!validation.withNumber(password))
      throw Error("Password must have at least one number");
  } catch (e) {
    passwordIstrue = false;
    document.querySelector(
      "#password_input .error_msg"
    ).textContent = `${e.message}`;
  }

  try {
    if (validation.areTheSame(password,confirmation)) throw Error("Passwords don't match");
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
    if (validation.withNumber(city)) throw Error("Name must not contain numbers!");
    if(city == "") throw Error("Please add a valid location!")
  } catch (e) {
    locationIsTrue = false;
    document.querySelector(
      "#user_city .error_msg"
    ).textContent = `${e.message}`;
  }

  return locationIsTrue;
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
