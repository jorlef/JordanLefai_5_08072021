function transformDataForSend() {
  let objectToSend = {};
  let arrayToSend = [];
  let objectFinal = {};

  for (let entriesStorage of Object.entries(localStorage)) {
    if (entriesStorage.includes("products") == false) {
      let key = entriesStorage[0];
      let value = entriesStorage[1];
      objectToSend[key] = value;
    } else {
      arrayToSend = entriesStorage[1].split(",");
    }
  }

  objectFinal["contact"] = objectToSend;
  objectFinal["products"] = arrayToSend;

  return (objectFinal);
}

function finalConfirm() {
  let objectFinal = transformDataForSend();

  console.log(objectFinal);

  fetch("http://localhost:3000/api/teddies/order", {
    mode: "cors",
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectFinal),
  })
    .then((resp) => {
      console.log(resp);
      if (resp.status === 200 || resp.status === 201) {
        return resp.json();
      } else {
        console.log("Status: " + resp.status);
        return Promise.reject("server");
      }
    })
    .then((showSuccess) => {
      console.log(showSuccess);
      console.log(showSuccess.orderId);
      let totalPrice = 0;
      for (let x= 0; x < showSuccess.products.length; x++) {
        totalPrice += showSuccess.products[x].price;
      }
      appendhtml = `<span>Votre commande <strong>n°${showSuccess.orderId}</strong> d'un montant de <strong>${totalPrice/100}€</strong> a bien été enregistrée.</span>`;
      document.getElementById("showMessage").innerHTML = appendhtml;
      // localStorage.removeItem("products");
    })
    .catch((err) => {
      // if (err === "server") return;
      // console.log(err);
      document.getElementById("showMessage").innerHTML = `<span>Votre commande n'a pas pu aboutir</span>`;
    });
}

finalConfirm();
