class Product{
    constructor(jsonProduct){
        // Assignation des Proprietes
        jsonProduct && Object.assign(this, jsonProduct);
    }
    //Conversion des prix
    convertPrice(product){
        var price = `${product.price}`;
        price = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
            
        })
        console.log(price);
    }
}



