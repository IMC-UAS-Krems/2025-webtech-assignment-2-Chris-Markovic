function addtocart(itemName){
    console.log("Added to cart")
    var cart= document.getElementById("items-in-cart")
    const item = document.createElement("item")
    item.innerText = itemName;
    cart.appendChild(item);
    cart.appendChild(document.createElement("br"));
}