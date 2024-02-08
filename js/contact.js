const handleSubmit = () => {
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("name-error");
  if (name === "") {
    nameError.textContent = "Please fill out your name";
  } else if (name.length > 100) {
    nameError.textContent = "Your name should not exceed 100 characters.";
  } else {
    nameError.textContent = "";
  }

  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phone-error");
  if (phone.length > 11) {
    phoneError.textContent = "Your phone should not exceed 11 numbers.";
  } else if (phone.length < 9) {
    phoneError.textContent = "Your phone should not shorter than 9 numbers.";
  } else {
    phoneError.textContent = "";
  }

  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("email-error");
  if (email.length > 100) {
    emailError.textContent = "Your email should not exceed 100 characters.";
  } else {
    emailError.textContent = "";
  }

  const address = document.getElementById("address").value.trim();
  const addressError = document.getElementById("address-error");
  if (address.length > 250) {
    addressError.textContent = "Your address should not exceed 250 characters.";
  } else {
    addressError.textContent = "";
  }

  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("message-error");
  if (message.length > 300) {
    messageError.textContent = "Your message should not exceed 300 characters.";
  } else {
    messageError.textContent = "";
  }

  const messageSuccessful = document.getElementById("message-successful");
  if (
    nameError.textContent === "" &&
    phoneError.textContent === "" &&
    emailError.textContent === "" &&
    addressError.textContent === "" &&
    messageError.textContent === ""
  ) {
    messageSuccessful.textContent =
      "Thanks for contacting us. We will be in touch soon.";
  } else {
    messageSuccessful.textContent = "";
  }
};
