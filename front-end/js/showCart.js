// condition to check if there is something in the cart
if (localStorage.getItem("products") == null) {
  document.getElementById("cartList").innerHTML += `
    <li>
      Il n'y a pas de produits dans votre panier
    </li>
    `;
} else {
  const cartContent = localStorage.getItem("products");
  //split string of localStorage to get each products in an array
  const splitString = cartContent.split(",");
  let totalPrice = 0;

  // loop to show the list of each products in the cart from localStorage
  for (let teddiesList of splitString) {
    fetch("http://localhost:3000/api/teddies/" + teddiesList)
      // convert response data to json
      .then(function (res) {
        return res.json();
      })

      // show each products added to localStorage as cart
      .then(function (data) {
        document.getElementById("cartList").innerHTML += `
            <li class="w-50 main__cartElement m-3">
                <img src="${data.imageUrl}" class="img-fluid">
                <div class="px-3 py-2 d-flex flex-row justify-content-between align-items-center">
                    <h2>${data.name}</h2>
                    <p><strong>${data.price / 100}€</strong></p>
                </div>
            </li>
            `;
        totalPrice += data.price;
        document.getElementById("main__price").innerHTML = `Prix total : <strong>${totalPrice/100}€</strong>`;
      })

      // show a message when there is an error in the request
      .catch(function (err) {
        document.getElementById("cartList").innerHTML += "<span>Erreur lors de la récupération des informations, rechargez la page</span>";
      });
  }
}