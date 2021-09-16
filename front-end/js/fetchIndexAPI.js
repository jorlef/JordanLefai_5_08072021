// fetch api data to show list of products
fetch("http://localhost:3000/api/teddies")
    // convert data to json
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        for (let product of data) {
            // add price 
            let appendhtml = `
                <li class="main__listElement">
                    <a href="./pages/product.html?id=${product._id}">
                        <img src="${product.imageUrl}" class="main__illustImg">
                        <div class="p-3 d-flex flex-row justify-content-between align-items-center">
                            <h2>${product.name}</h2>
                            <span>${product.price/100}€</span>
                        </div>
                    </a>
                </li>
            `;
            document.getElementById("itemsList").innerHTML += appendhtml;
        }
    })
    .catch(function (err) {
        var errorhtml = '<li class="p-3 mb-2 rounded-pill bg-white">Erreur lors de la récupération des informations, rechargez la page</li>';
        document.getElementById("itemsList").innerHTML += errorhtml;
    })