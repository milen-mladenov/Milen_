export {
  withCapitalLetter,
  withSpecial,
  withNumber,
  emailValidation,
  isOnlyLetters,
  areTheSame,
  personalNumber,
  personalIDCardNumber,
  isValidEIK,
  isValidVAT,
  isValidPhoneNumber
};

function withCapitalLetter(n) {
  let capitalLetterPattern = /[A-Z]{1,}/;
  let capitalLetterTrue = false;
  if (capitalLetterPattern.exec(n) !== null) {
    capitalLetterTrue = true;
  }
  return capitalLetterTrue;
}

function withSpecial(n) {
  let specialCymbolPattern = /\W/;
  let specialCymbolTrue = false;
  if (specialCymbolPattern.exec(n) !== null) {
    specialCymbolTrue = true;
  }
  return specialCymbolTrue;
}

function withNumber(n) {
  let numberPattern = /[0-9]/;
  let numberTrue = false;
  if (numberPattern.exec(n) !== null) {
    numberTrue = true;
  }
  return numberTrue;
}

function emailValidation(n) {
  let emailPattern = /^\w+@[A-Za-z]+.[A-Za-z]{2,}$/;
  let emailIsTrue = true;
  let email = n.value;

  // confirming email is a valid input
  try {
    if (email == "") throw Error("Please fill up the field");
    if (emailPattern.exec(email) == null) throw Error("not email");
  } catch (e) {
    emailIsTrue = false;
  }

  return emailIsTrue;
}

function isOnlyLetters(n) {
  let isTrue = false;
  let pattern = /^[A-Za-z]+$/;

  if (pattern.exec(n) == null) return (isTrue = true);
}

function areTheSame(a, b) {
  if (a == b) {
    return true;
  }
  return false;
}

function personalNumber(n) {
  if (n.length < 10) {
    return false;
  }
  let numberArray = n.split("");

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
      return false;
    }
    if (isNaN(numberArray[i])) {
      return false;
    }
  }

  let year = numberArray[0] + numberArray[1];
  let month = numberArray[2] + numberArray[3];
  let date = numberArray[4] + numberArray[5];
  let lastFour =
    numberArray[6] + numberArray[7] + numberArray[8] + numberArray[9];

  if (date > 31) {
    return false;
  }

  if (numberArray[0] == 0 || numberArray[0] == 1 || numberArray[0] == 2) {
    year = `20${year}`;
  } else {
    year = `19${year}`;
  }

  let valMonth = isValidMonth(month);
  let trueDate = isValidDate(date, month);

  function isValidDate(date, month) {
    let thirtyDays = [04, 06, 09, 11];
    let thirtyOneDays = [01, 03, 05, 07, 08, 10, 12];
    let isTrue = false;
    if (thirtyDays.includes(month)) {
      if (date < 31) {
        return true;
      }
    } else if (thirtyOneDays.includes(month)) {
      if (date < 32) {
        return true;
      }
    } else if (month == 02) {
      if (checkLeapYear(year)) {
        if (date < 30) {
          return true;
        }
      } else {
        if (date < 29) {
          return true;
        }
      }
    }
    return isTrue;
  }

  function isValidMonth(month) {
    if (month <= 12) {
      return true;
    } else {
      return false;
    }
  }

  function checkLeapYear(year) {
    year = Number(year);
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
      return true;
    } else {
      return false;
    }
  }

  return valMonth && trueDate;
}

function personalIDCardNumber(n) {
  if (n.length < 9) {
    return false;
  }
  let numberArray = n.split("");
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
      return false;
    }
    if (isNaN(numberArray[i])) {
      return false;
    }
  }
  return true;
}

function isValidEIK(n) {
  let matches;
  if (!(matches = n.match(/^((\d{9})(\d{4})?)$/))) return false;
  //1*а1+2*а2+3*а3+4*а4+5*а5+6*а6+7*а7+8*а8;
  let a = matches[2].split("").map(function (i) {
    return parseInt(i, 10);
  });
  let a9 =
    a[0] * 1 +
    a[1] * 2 +
    a[2] * 3 +
    a[3] * 4 +
    a[4] * 5 +
    a[5] * 6 +
    a[6] * 7 +
    a[7] * 8;
  a9 = a9 % 11;
  if (a9 == 10) {
    //3*а1+4*а2+5*а3+6*а4+7*а5+8*а6+9*а7+10*а8
    a9 =
      a[0] * 3 +
      a[1] * 4 +
      a[2] * 5 +
      a[3] * 6 +
      a[4] * 7 +
      a[5] * 8 +
      a[6] * 9 +
      a[7] * 10;
    a9 = a9 % 11;
  }
  a9 = a9 == 10 ? 0 : a9;
  if (a9 != a[8]) return false;
  if (!matches[3]) return true;
  //2*а9 + 7*а10 + 3*а11 +5*а12
  a = matches[3].split("").map(function (i) {
    return parseInt(i, 10);
  });
  let a13 = a9 * 2 + a[0] * 7 + a[1] * 3 + a[2] * 5;
  a13 = a13 % 11;
  //4*а9+9*а10+5*а11+7*а12
  if (a13 == 10) {
    a13 = a9 * 4 + a[0] * 9 + a[1] * 5 + a[2] * 7;
    a13 = a13 % 11;
  }
  a13 = a13 == 10 ? 0 : a13;
  return a13 == a[3];
}

function isValidVAT(n) {
  let parts = n.match(/^(BG)(\d{9,})/);
  return parts !== null && isValidEIK(parts[2]);
}

function isValidPhoneNumber(n) {

  let numberArray = n.split("");

  if (numberArray[0] == "+") {
    if (n.length < 12) {
      return false;
    }
    for (let i = 1; i < numberArray.length; i++) {
      if (numberArray[i] < 0) {
        return false;
      }
      if (isNaN(numberArray[i])) {
        return false;
      }
    }
  } else {
    if (n.length < 10) {
      return false;
    }
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] < 0) {
        return false;
      }
      if (isNaN(numberArray[i])) {
        return false;
      }
    }
  }

  return true;
}
