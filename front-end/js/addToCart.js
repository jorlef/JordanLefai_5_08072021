function getProductId() {
  let getId = urlGetParams("id");
  let getLocalStorage = localStorage.getItem("products");
  let items = [];

  if (getLocalStorage == null) {
    items.push(getId);
    localStorage.setItem("products", items);
  } 
  else {
    if (getLocalStorage.includes(getId) == false) {
      items.push(localStorage.getItem("products"));
      items.push(getId);
      localStorage.setItem("products", items);
    }
  }
}