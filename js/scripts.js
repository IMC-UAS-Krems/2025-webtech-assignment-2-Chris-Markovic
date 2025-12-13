// A classmate helped me create the total() function and the price calculation and displaying

let totalprice = 0;

/**
 * @param {string} itemName 
*/
function addtocart(itemName){
    console.log("Added to cart")
    let cartitems= document.getElementById("items-in-cart")
    const item = document.createElement("item")
    item.innerText = itemName;
    let price = itemName.split("-")[1].trim();
    
    totalprice += parseFloat(price.substring(0, price.length-1));

    cartitems.appendChild(item);
    cartitems.appendChild(document.createElement("br"));

    total();
}

function total() {
    document.getElementById("total-display").innerText = totalprice.toString();
}




//https://www.tutorialspoint.com/how-to-hide-a-div-in-javascript-on-button-click#:~:text=To%20hide%20a%20div%20in%20JavaScript%20on%20button%20click%2C%20we,display%20the%20hidden%20div%20again.
function hide(){
    if (totalprice === 0) {
        return;
    }
    let checkoutheadline = document.getElementById("checkoutheadline")
    let items = document.getElementById("items");
    let backbutton = document.getElementById("backbutton")
    let title = document.getElementById("title")
    let checkout = document.getElementById("checkout")
    let shipping = document.getElementById("shipping");
    let payment = document.getElementById("payment")
    let summary = document.getElementById("summary");
    if (items.style.display === "none") {
        items.style.display = "flex";
        backbutton.style.display = "none";
        checkoutheadline.style.display="none";
        checkout.style.display="none";
        title.style.display="block";
        payment.style.display="none";
    } else {
        items.style.display = "none";
        backbutton.style.display = "block";
        checkoutheadline.style.display = "block";
        checkout.style.display="block";
        title.style.display="none";
        shipping.style.display="block";
        payment.style.display="none";
    }

    cart.classList.remove("show");
    summary.style.display="none";
}

function back(){
    let items = document.getElementById("items");
    let backbutton = document.getElementById("backbutton");
    let cart = document.getElementById("cart");
    let title = document.getElementById("title");
    let shipping = document.getElementById("shipping");
    let payment = document.getElementById("payment");
    let summary = document.getElementById("summary");
    items.style.display = "flex"
    backbutton.style.display = "none"
    checkoutheadline.style.display = "none";
    checkout.style.display="none";
    shipping.style.display="none";
    cart.classList.remove("show");
    title.style.display = "block";
    payment.style.display = "none";
    summary.style.display="none";
    }   

function hideshipping(){
    let shipping = document.getElementById("shipping");
    let payment = document.getElementById("payment");
    shipping.style.display="none";
    payment.style.display="block";
}

function summary(){
    let payment = document.getElementById("payment");
    let checkout = document.getElementById("checkout");
    let summary = document.getElementById("summary");
    let checkoutheadline = document.getElementById("checkoutheadline")
    payment.style.display="none";
    checkout.style.display="none";
    summary.style.display="block";
    checkoutheadline.style.display="none";
}






