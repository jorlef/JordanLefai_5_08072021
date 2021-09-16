function userInfo () {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('mail').value;

    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("address", address)
    localStorage.setItem("city", city)
    localStorage.setItem("email", email)

    location.href = "./confirm_order.html"
}