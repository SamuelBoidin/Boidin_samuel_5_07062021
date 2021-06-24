/**
 * Gère l'affichage et les interactions de la page produit
 */
//récuperation de l'Id du produit
const params = new URLSearchParams(location.search);
const productId = params.get("id");
console.log(productId);
fetch(`http://localhost:3000/api/cameras/${productId}`)
    //récuperation des données
    .then(data => data.json())
    .then(jsonListProduct => {
        let product = new Product(jsonListProduct);
        let price = convertPrice(product.price);
        addCards(product);
        function addCards(product) {
            //récupération de l'image produit
            let seeProductImage = document.getElementById("productImage").innerHTML += `<img class="img-fluid" src="${product.imageUrl}" alt="${product.name}">`;
            //récupération du nom du produit
            let seeProductName = document.getElementById("productName").innerHTML += `<h5 class="card-title">${product.name}</h5>`;
            //récupération de la description produit
            let seeProductDescription = document.getElementById("productDescription").innerHTML += `<p class="card-text">${product.description}</p>`;
            //récupération du prix du produit
            let seeProductPrice = document.getElementById("productPrice").innerHTML += `<p class="card-text">${price}</p>`;
        }
        //récupération des lentilles du produit
        addLenses(product);
        //Fonction pour incrémenter les lentilles
        function addLenses(product) {
            let productLenses = document.querySelector(".productLenses");
            for(let lenses of product.lenses) { 
                productLenses.innerHTML += `<option>${lenses}</option>`;
            }
        }
        //Événement d'ajout au panier
    	buttonAddToBasket.addEventListener("click", (e) => {
            e.preventDefault();
        //récupération des options et quantité du produit
        let selectedProductOption = document.getElementById("selectedProductOption");
        let productSelected = new BasketProduct (
            product.name,
            price,
            selectedProductOption,
            product.imageUrl,
            productId,
        )
        addToBasket(productSelected);  
        });
    });
           