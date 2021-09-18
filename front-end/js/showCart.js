// array for POST request later too
if (localStorage.getItem("products") == null) {
    let cartError = `
            <li>
                Il n'y a pas de produits dans votre panier
            </li>
        `;
    document.getElementById("cartList").innerHTML += cartError;
}
else {
    const cartContent = localStorage.getItem("products");
    const splitString = cartContent.split(',');

    for (let teddiesList of splitString) {
        fetch("http://localhost:3000/api/teddies/" + teddiesList)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let appendhtml = `
                <li class="w-50 main__cartElement m-3">
                    <img src="${data.imageUrl}" class="img-fluid">
                    <div class="px-3 py-2 d-flex flex-row justify-content-between align-items-center">
                        <h2>${data.name}</h2>
                        <p>${data.price/100}€</p>
                    </div>
                </li>
            `;
            document.getElementById("cartList").innerHTML += appendhtml;
        })
        .catch(function (err) {
            var errorhtml = '<span>Erreur lors de la récupération des informations, rechargez la page</span>';
            document.getElementById("cartList").innerHTML += errorhtml;
        })
    }
}


