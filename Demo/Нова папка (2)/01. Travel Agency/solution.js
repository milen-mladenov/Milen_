window.addEventListener('load', solution);

function solution() {

  let inputs = {
    fullName: document.getElementById("fname"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    address: document.getElementById("address"),
    postalCode: document.getElementById("code"),
  }
  const submitButton = document.getElementById("submitBTN");
  const infoPreview = document.getElementById("infoPreview");


  submitButton.addEventListener("click", submitTravelDetails)
  function submitTravelDetails() {
    let editButton = document.querySelector("#editBTN");
    let continueButton = document.querySelector("#continueBTN");

    let nameElement = document.createElement("li");
    let emailElement = document.createElement("li");
    let phoneElement = document.createElement("li");
    let addressElement = document.createElement("li");
    let postalElement = document.createElement("li");

    let name = inputs.fullName.value;
    let email = inputs.email.value;
    let phone = inputs.phone.value;
    let address = inputs.address.value;
    let code = inputs.postalCode.value;

    if(name == "" || email == "") {
      return
    }
    nameElement.textContent = `Full Name: ${name}`
    emailElement.textContent = `Email: ${email}`
    phoneElement.textContent = `Phone Number: ${phone}`
    addressElement.textContent = `Address: ${address}`
    postalElement.textContent = `Postal Code: ${code}`

    infoPreview.appendChild(nameElement)
    infoPreview.appendChild(emailElement)
    infoPreview.appendChild(phoneElement)
    infoPreview.appendChild(addressElement)
    infoPreview.appendChild(postalElement)
    editButton.disabled = false
    continueButton.disabled = false
    submitButton.disabled = true

    inputs.fullName.value = "";
    inputs.email.value = "";
    inputs.phone.value = "";
    inputs.address.value = "";
    inputs.postalCode.value = "";

    editButton.addEventListener("click", edit);
    continueButton.addEventListener("click", finish);


    function edit() {
      inputs.fullName.value = name;
      inputs.email.value = email;
      inputs.phone.value = phone;
      inputs.address.value = address;
      inputs.postalCode.value = code;

      clearPreview()
      submitButton.disabled = false;

      continueButton.disabled = true;
      editButton.disabled = true;
    }

    function clearPreview() {
      nameElement.remove();
      emailElement.remove();
      phoneElement.remove();
      addressElement.remove();
      postalElement.remove();

    }

    function finish() {
      let page = document.getElementById("block");
      page.innerHTML = `<h3>Thank you for the reservation!</h3>`
    }
  }
}
