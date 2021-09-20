// function to add product to the cart
function addToCart() {
  let getId = urlGetParams("id");
  let getLocalStorage = localStorage.getItem("products");
  let items = [];

  // conditions to check if localStorage is empty or product already exist in it
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