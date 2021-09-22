// function that return object to send to backend from localStorage
function transformDataForSend() {
  let objectToSend = {};
  let arrayToSend = [];
  let objectFinal = {};

  for (let entriesStorage of Object.entries(localStorage)) {
    if (entriesStorage.includes("products")) {
      arrayToSend = entriesStorage[1].split(",");
    } else {
      let key = entriesStorage[0];
      let value = entriesStorage[1];
      objectToSend[key] = value;
    }
  }

  objectFinal["contact"] = objectToSend;
  objectFinal["products"] = arrayToSend;

  return objectFinal;
}

// function that send POST request and show price and order_id
function sendToBackend() {
  let objectFinal = transformDataForSend();

  fetch("http://localhost:3000/api/teddies/order", {
    mode: "cors",
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectFinal),
  })
    // check the resp status and if ok convert response to json
    .then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        return resp.json();
      } else {
        console.log("Status: " + resp.status);
        return Promise.reject("server");
      }
    })
    // show price and order_id then clear localStorage
    .then((showSuccess) => {
      let totalPrice = 0;

      for (let x = 0; x < showSuccess.products.length; x++) {
        totalPrice += showSuccess.products[x].price;
      }

      document.getElementById("showMessage").innerHTML = `<span>Votre commande <strong>n°${showSuccess.orderId}</strong> d'un montant de <strong>${totalPrice / 100}€</strong> a bien été enregistrée.</span>`;

      localStorage.clear();
    })
    // show a message when there is an error in the request
    .catch((err) => {
      document.getElementById("showMessage").innerHTML = `<span>Votre commande n'a pas pu aboutir</span>`;
    });
}

sendToBackend();