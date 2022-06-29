const userFirstNameInput = document.getElementById("first_name_input");
const userLastNameInput = document.getElementById("last_name_input");
const userEmailInput = document.getElementById("email_input");
const userPhoneInput = document.getElementById("phone_input");



function personalContacts() {

}

console.log(nameCheck(userFirstNameInput, userLastNameInput));

function nameCheck(userFirstNameInput, userLastNameInput){

    let firstName = userFirstNameInput.value;
    let lastName = userLastNameInput.value;

    if(firstName == "") return
    if(lastName == "") return

    let numberCheck = /[0-9]/
    let specialCheck = /\W/

    let isOnlyLetters = true;

    try {
        if(numberCheck.exec(firstName) !== null) throw Error("Name must be only letters!");
        if(specialCheck.exec(firstName)!== null) throw Error("Name must be only letters!");
        if(firstName.length < 2) throw Error("Name is too short!");
    } catch(e) {
        isOnlyLetters = false;
    }

    try {
        if(numberCheck.exec(lastName) !== null) throw Error("Name must be only letters!");
        if(specialCheck.exec(lastName)!== null) throw Error("Name must be only letters!");
        if(lastName.length < 2) throw Error("Name is too short!");
    } catch(e) {
        isOnlyLetters = false;
    }



    return isOnlyLetters
    
}