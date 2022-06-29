export {
    withCapitalLetter,
    withSpecial,
    withNumber,
    emailValidation,
    isOnlyLetters,
    areTheSame,
    personalNumber
}

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

    if (pattern.exec(n) == null) return isTrue = true;
}

function areTheSame(a, b) {

    if (a == b) {
        return true
    }
    return false
}

function personalNumber(n) {


    if (n.length < 10) {
        return false;
    }
    let numberArray = n.split("");

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < 0) {
            return false
        }
        if (isNaN(numberArray[i])) {
            return false
        }
    }

    let year = numberArray[0] + numberArray[1];
    let month = numberArray[2] + numberArray[3];
    let date = numberArray[4] + numberArray[5];
    let lastFour = numberArray[6] + numberArray[7] + numberArray[8] + numberArray[9];


    if (date > 31) {
        return false
    }


    if (numberArray[0] == 0 || numberArray[0] == 1 || numberArray[0] == 2) {
        year = `20${year}`
    } else {
        year = `19${year}`
    }


    let valMonth = isValidMonth(month);
    let trueDate = isValidDate(date, month)

    function isValidDate(date, month) {
        let thirtyDays = [04, 06, 09, 11]
        let thirtyOneDays = [01, 03, 05, 07, 08, 10, 12]
        let isTrue = false
        if (thirtyDays.includes(month)) {
            if (date < 31) {
                return true
            }
        } else if (thirtyOneDays.includes(month)) {
            if (date < 32) {
                return true
            }
        } else if (month == 02) {
            if (checkLeapYear(year)) {
                if (date < 30) {
                    return true
                }
            } else {
                if (date < 29) {
                    return true
                }
            }
        }
        return isTrue
    }

    function isValidMonth(month) {
        if (month <= 12) {
            return true;
        } else {
            return false
        }
    }

    function checkLeapYear(year) {
        year = Number(year)
        const leap = new Date(year, 1, 29).getDate() === 29;
        if (leap) {
            return true;
        } else {
            return false;
        }
    }

    
    return valMonth && trueDate;
    
}

