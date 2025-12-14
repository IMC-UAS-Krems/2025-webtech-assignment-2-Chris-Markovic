// A classmate helped me create the total() and addtocart functions and the price calculation and displaying

let totalprice = 0;
let n=0;
let discount = 0;

/**
 * @param {string} itemName 
*/

function addtocart(itemName){
    console.log("Added to cart")
    let cartitems = document.getElementById("items-in-cart")
    const item = document.createElement("div")
    item.innerText = itemName;
    let price = itemName.split("-")[1].trim();
    
    totalprice += parseFloat(price.substring(0, price.length-1));

    cartitems.appendChild(item);
    cartitems.appendChild(document.createElement("br"));
    n = n + 1;

    total();
}

function total() {
    document.getElementById("total-display").innerText = totalprice.toFixed(2);
    updatePayTotal();
}

//https://getbootstrap.com/docs/5.3/forms/validation/
//Took the code from the website above and changed it so that the page doesn t reload when clicking the butoon

(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity()) {
                if (form.id === "shippingForm") {
                    hideshipping();
                } else if (form.id === "paymentForm") {
                    showSummary();
                }
            }

            form.classList.add('was-validated');
        }, false);
    });
})();



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
    shipping.style.display = "none";
    payment.style.display = "block";
}

function showSummary(){
    let payment = document.getElementById("payment");
    let checkout = document.getElementById("checkout");
    let summary = document.getElementById("summary");
    let checkoutheadline = document.getElementById("checkoutheadline");
    let tax = totalprice * 0.2;
    let discounttext = document.getElementById("discounttext");

    payment.style.display = "none";
    checkout.style.display = "none";
    summary.style.display = "block";
    checkoutheadline.style.display = "none";

   
    document.getElementById("summary-total").innerText = totalprice.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);

    if (n >= 3) {
        discount = totalprice * 0.15;
        discounttext.style.display = "block";
        document.getElementById("discount").innerText = discount.toFixed(2);
    } else {
        discount = 0;
        discounttext.style.display = "none";
    }

    let totalwithtax = totalprice + tax - discount;
    document.getElementById("totalwithtax").innerText = totalwithtax.toFixed(2);

    
    let itemsinsummary = document.getElementById("itemsinsummary");
    itemsinsummary.innerHTML = "";

    let cartitems = document.getElementById("items-in-cart").children;
    for (let i = 0; i < cartitems.length; i += 2) {
        const div = document.createElement("div");
        div.innerText = cartitems[i].innerText;
        itemsinsummary.appendChild(div);
    }
}


function updatePayTotal(){
    let tax = totalprice * 0.2;
    let finalDiscount = 0;  
    if (n >= 3) {
    finalDiscount = totalprice * 0.15;
    }
    let totalwithtax = totalprice + tax - finalDiscount;
    document.getElementById("pay-total").innerText = totalwithtax.toFixed(2);
}

function addtosummary(itemName){
    console.log("Added to summary")
    let itemsinsummary = document.getElementById("itemsinsummary");
    const item = document.createElement("div");
    item.innerText = itemName;

    itemsinsummary.appendChild(item);
    itemsinsummary.appendChild(document.createElement("br"));

    total();
}
















