// enlever id 
const getId = window.location.search.substring(4);
console.log(getId)

fetch("http://localhost:3000/api/teddies/" + getId)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let appendhtml = `
        <div>
            <img src="${data.imageUrl}" class="main__productImg">
        </div>
        <div class="px-4">
            <div class="main__productLine my-3 d-flex flex-row align-items-center justify-content-between ">
                <h2 class="m-0 mb-2">${data.name}</h2>
                <p class="m-0 mb-2"><strong>${data.price/100}€</strong></p>
            </div>
            <div class="my-3 text-center">
                <label for="teddycolor" class="pb-2">Couleur :</label>
                <select name="color" id="teddycolor">
                    <option value="">--Choix de la couleur</option>
                </select>
            </div>
            <div class="mt-4 text-center">
                <button onclick="getProductId(getId)" class="px-2 mb-4 rounded-pill">Commander</button>
            </div>
        </div>
    `;
    document.getElementById("product").innerHTML = appendhtml;
    document.title = `Orinoco - Ours ${data.name}`

    for (let listChoice of data.colors) {
        console.log(listChoice);
        let colorsChoice = `<option value="${listChoice.toLowerCase()}">${listChoice}</option>`;
        document.getElementById("teddycolor").innerHTML += colorsChoice;
    }
})
.catch(function (err) {
    var errorhtml = '<span>Erreur lors de la récupération des informations, rechargez la page</span>';
    document.getElementById("product").innerHTML += errorhtml;
})