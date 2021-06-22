// Requette
fetch("http://localhost:3000/api/cameras")
//récuperation des données
    .then(data => data.json())
    .then(jsonListProduct => {
        for(let jsonProduct of jsonListProduct) {
            let product = new Product(jsonProduct);
            // Intégration des cards produits
            document.getElementById("cardsList").innerHTML +=`<div class="card col-sm-12 col-md-5 col-lg-5 mb-5 shadow rounded pt-3">
                                                                    <img src="${product.imageUrl}" alt="${product.name}">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">${product.name}</h5>
                                                                        <p class="card-text">${product.description}</p>
                                                                        <p class="card-text">${product.price}</p>
                                                                        <a href="./frontend/product.html" class="btn btn-primary font-weight-bold btn-product">Voir ce produit</a>
                                                                    </div>
                                                                </div>`;
        }
    })
