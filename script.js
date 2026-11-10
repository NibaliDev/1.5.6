function onSubmit(e) {
    e.preventDefault();
    let message = "";

    inputs = document.querySelectorAll('input');
    messageTag = document.getElementById('message');

    if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "" || inputs[3].value === "") {
        message += "Alla fält måste fyllas i!";
    }

    if (inputs[0].value.length < 3) {
        message += "Användarnamnet måste vara minst 3 tecken! ";
    }

    if (!inputs[1].value.includes("@") || !(inputs[1].value.includes(".") >= 1)) {
        message += "E-postadressen är inte giltig! ";
    }

    if (inputs[2].value.length < 8) {
        message += "Lösenordet måste vara minst 8 tecken! ";
    }

    if (inputs[2].value !== inputs[3].value) {
        message += "Lösenorden matchar inte! ";
    }

    if (message === "") {
        message = "Registrering lyckades!";
        messageTag.style.color = "green";
    }
    else {
        messageTag.style.color = "red";
    }
    
    messageTag.innerText = message;
    
}



let form = document.querySelector('form');

form.addEventListener('submit', onSubmit);
