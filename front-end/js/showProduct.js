// function to get the desired GET parameter
function urlGetParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get(param);
  return productId;
}

// function to get the product from the "id" in the GET parameter
function showProduct() {
  let getId = urlGetParams("id");

  fetch("http://localhost:3000/api/teddies/" + getId)
    // convert response data to json
    .then(function (res) {
      return res.json();
    })
    // change the title of the page and show the product
    .then(function (data) {
      document.title = `Orinoco - Ours ${data.name}`;

      document.getElementById("product").innerHTML = `
        <div>
          <img src="${data.imageUrl}" class="main__productImg">
        </div>
        <div class="px-4">
          <div class="main__productLine my-3 d-flex flex-row align-items-center justify-content-between ">
            <h2 class="m-0 mb-2">${data.name}</h2>
            <p class="m-0 mb-2"><strong>${data.price / 100}€</strong></p>
          </div>
          <div class="my-3 text-center">
            <label for="teddycolor" class="pb-2">Couleur :</label>
            <select name="color" id="teddycolor">
              <option value="">--Choix de la couleur</option>
            </select>
          </div>
          <div class="mt-4 text-center">
            <button onclick="getProductId()" class="px-2 mb-4 rounded-pill">Commander</button>
          </div>
        </div>
        `;

      // loop to get each choice of colors
      for (let listChoice of data.colors) {
        document.getElementById("teddycolor").innerHTML += `<option value="${listChoice.toLowerCase()}">${listChoice}</option>`;
      }
    })

    // show a message when there is an error in the request
    .catch(function (err) {
      var errorhtml = "<span>Erreur lors de la récupération des informations, rechargez la page</span>";
      document.getElementById("product").innerHTML += errorhtml;
    });
}

showProduct();