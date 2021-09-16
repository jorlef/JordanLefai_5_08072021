// add if later to check for duplicate
function getProductId(getId) {
    var getLocalStorage = localStorage.getItem("products");
    var items = [];

    if (getLocalStorage !== null) {
        items.push(localStorage.getItem("products"))
    }

    items.push(getId);
    localStorage.setItem("products", items);
}