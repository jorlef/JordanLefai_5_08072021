function userInfo () {
    let checkForRedirect = 0;
    let regExAlphabetic = new RegExp(/^[a-z ,.'-]{1,64}$/i);
    let regExAlphaNumeric = new RegExp(/^[a-zA-Z0-9 ,.'-]{1,128}$/);
    let regExMail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (document.getElementById("errorMessage").childElementCount >= 1) {
        let removeErrorMessage = document.getElementById("errorMessage");
        removeErrorMessage.innerHTML = "";
    }
    
    if (regExAlphabetic.test(document.getElementById('firstname').value)) {
        let firstName = document.getElementById('firstname').value;
        localStorage.setItem("firstName", firstName);
        checkForRedirect += 1;
    }
    else {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez rentrez une valeur valide pour votre Prénom</span>`;
    }

    if (regExAlphabetic.test(document.getElementById('lastname').value)) {
        let lastName = document.getElementById('lastname').value;
        localStorage.setItem("lastName", lastName)
        checkForRedirect += 1;
    }
    else {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez rentrez une valeur valide pour votre Nom</span>`;
    }

    if (regExAlphaNumeric.test(document.getElementById('address').value)) {
        let address = document.getElementById('address').value;
        localStorage.setItem("address", address)
        checkForRedirect += 1;
    }
    else {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez rentrez une valeur valide pour votre Adresse</span>`;
    }

    if (regExAlphaNumeric.test(document.getElementById('city').value)) {
        let city = document.getElementById('city').value;
        localStorage.setItem("city", city)
        checkForRedirect += 1;
    }
    else {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez rentrez une valeur valide pour votre Ville</span>`;
    }

    if (regExMail.test(document.getElementById('mail').value)) {
        let email = document.getElementById('mail').value;
        localStorage.setItem("email", email)
        checkForRedirect += 1;
    }
    else {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez rentrez une valeur valide pour votre Mail</span>`;
    }

    if (localStorage.getItem("products") == null) {
        document.getElementById('errorMessage').innerHTML += `<span class="d-block">Veuillez remplir votre panier avant de passer commande</span>`;
    }

    if (checkForRedirect == 5 && localStorage.getItem("products") !== null) {
        location.href = "./confirm_order.html"
    }
    
}