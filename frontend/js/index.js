/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
fetch("http://localhost:3000/api/cameras")
//récuperation des données
    .then(data => data.json())
    .then(jsonListProduct => {
        for(let jsonProduct of jsonListProduct) {
            let product = new Product(jsonProduct);
            let price = convertPrice(product.price);
            // Intégration des cards produits
            document.getElementById("cardsList").innerHTML +=`<div class="card col-sm-12 col-md-5 col-lg-5 mb-5 shadow rounded pt-3">
                                                                    <img class="img-fluid" src="${product.imageUrl}" alt="${product.name}">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">${product.name}</h5>
                                                                        <p class="card-text">${product.description}</p>
                                                                        <p class="card-text">${price}</p>
                                                                        <a href="./frontend/product.html?id=${product._id}" class="btn btn-primary font-weight-bold buttonSeeProduct">Voir ce produit</a>
                                                                </div>`;
        }
    })