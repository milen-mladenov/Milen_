let formSubmitButton = document.querySelector("form button");



formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    formValidation()
    
})

function formValidation(){

    let userFirstName = document.getElementById("first_name_input_field");
    let userLastName = document.getElementById("")
    let userEmail = document.getElementById("email_input_field");
    let userEmailConfirm = document.getElementById("email_input_field_confirmation");

    let emailIsTrue = true;

    try {
        if(userFirstName.value == "") throw Error("Please fill up the field");
        if(userFirstName.value.length <= 2) throw Error("Name is too short");
    } catch(e) {
        document.querySelector("#first_name_label .error_msg").textContent = `${e.message}`
        userFirstName.style.borderBottomColor = "red"
    }

    try {
        if(userEmail.value == "") throw Error("Please fill up the field");
        if(userEmail) throw Error("not email");

    } catch (e) {
        emailIsTrue = false;
        document.querySelector("#email_label .error_msg").textContent = `${e.message}`
        userFirstName.style.borderBottomColor = "red"
    }

    try {
        if(userEmailConfirm.value == "") throw Error("Please fill up the field")
        if(userEmailConfirm.value !== userEmail.value || !emailIsTrue) throw Error("emails not the same")
    } catch (e) {
        document.querySelector("#email_confirm .error_msg").textContent = `${e.message}`
    }


}