/**
 * Fonction globale
 */
class Product {
    constructor(jsonProduct){
        // Assignation des propriétés du jsonProduct à toutes les instances de jsonProduct
        jsonProduct && Object.assign(this, jsonProduct);
    }
}
//Fonction pour la conversion des prix
function convertPrice(productPrice) {
    let price = `${productPrice}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}
//création d'une classe pour les produits dans le panier
class BasketProduct {
    constructor(name, price, option, id, imageUrl) {
        this.name = name;
        this.price = price;
        this.option = option;
        this.imageUrl = imageUrl;
        this.id = id;
        
    }
}




    
    

















//Local Storage
function addToBasket(productSelected) {
    let listOfBasket = getBasket();
    listOfBasket.push(productSelected);
    saveBasket(listOfBasket);
}

function getBasket(){
    let listOfBasket = localStorage.getItem("listOfBasket");
    if(listOfBasket == null){
        return [];
    }else{
        return JSON.parse(listOfBasket);
    }
}

function saveBasket(listOfBasket){
    localStorage.setItem("listOfBasket",JSON.stringify(listOfBasket));
}

