// A classmate helped me create the total() function and the price calculation and displaying

let totalprice = 0;

/**
 * @param {string} itemName 
*/
function addtocart(itemName){
    console.log("Added to cart")
    let cart= document.getElementById("items-in-cart")
    const item = document.createElement("item")
    item.innerText = itemName;
    let price = itemName.split("-")[1].trim();
    
    totalprice += parseFloat(price.substring(0, price.length-1));

    cart.appendChild(item);
    cart.appendChild(document.createElement("br"));

    total();
}

function total() {
    document.getElementById("total-display").innerText = totalprice.toString();
}


//https://www.tutorialspoint.com/how-to-hide-a-div-in-javascript-on-button-click#:~:text=To%20hide%20a%20div%20in%20JavaScript%20on%20button%20click%2C%20we,display%20the%20hidden%20div%20again.
function hide(){
    let items = document.getElementById("items");
    let backbutton = document.getElementById("backbutton")
    if (items.style.display === "none") {
        items.style.display = "flex";
        backbutton.style.display = "none";
    } else {
        items.style.display = "none";
        backbutton.style.display = "block";

    }

}

function back(){
    let items = document.getElementById("items");
    let backbutton = document.getElementById("backbutton")
    let cart = 
    items.style.display = "flex"
    backbutton.style.display = "none"
    }   
