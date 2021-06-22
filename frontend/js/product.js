
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => addProductCards(response))
.catch((erreur) => console.log("erreur : " + erreur));

function addProductCards(response) {
    let productImage = document.getElementById("productImage").innerHTML += `<img class="card-img-top img-fluid" src="${response[i].imageUrl}" id="productImage"></img>`;
    let productName = document.getElementById("productName").innerHTML = `<h5 class="card-title" id="productName">${response[i].name}</h5>`;
    let productDescription = document.getElementById("productDescription").innerHTML = `<p class="card-text" id="productDescription">${response[i].description}</p>`;
    let productPrice = document.getElementById("productPrice").innerHTML = `<p class="card-text" id="productPrice">${response[i].price}</p>`;
}

<div class="card col-sm-12 col-md-5 col-lg-5 mb-5 shadow rounded pt-3">
                        <img src="${response[i].imageUrl}" alt="${response[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${response[i].name}</h5>
                            <p class="card-text">${response[i].description}</p>
                            <p class="card-text">${response[i].price}</p>
                            <a href="./frontend/product.html" class="btn btn-primary font-weight-bold btn-product">Voir ce produit</a>
                        </div>
                    </div>`;



                    function addCards(response) {
                const cards = document.getElementById("cardsList");
                for(let i=0; i < response.length; i++) {
                    cards.innerHTML += `      