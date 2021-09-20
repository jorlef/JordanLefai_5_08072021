// fetch api data to show list of products in index
fetch("http://localhost:3000/api/teddies")
  // convert response data to json
  .then((res) => {
    return res.json();
  })

  // loop the fetched data to show each product
  .then((data) => {
    for (let product of data) {
      document.getElementById("itemsList").innerHTML += `
        <li class="main__listElement">
            <a href="./pages/product.html?id=${product._id}">
                <img src="${product.imageUrl}" class="main__illustImg">
                <div class="px-3 py-2 d-flex flex-row justify-content-between align-items-center">
                    <h2>${product.name}</h2>
                    <span><strong>${product.price / 100}€</strong></span>
                </div>
            </a>
        </li>
        `;
    }
  })

  // show a message when there is an error in the request
  .catch((err) => {
    document.getElementById("itemsList").innerHTML += '<li class="p-3 mb-2 rounded-pill bg-white">Erreur lors de la récupération des informations, rechargez la page</li>';
  });
