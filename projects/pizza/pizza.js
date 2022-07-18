document.getElementById("submitOrder").onclick = submitOrder;


function submitOrder(){
    let pizza = document.getElementById("pizza").value;
    let flavour = document.getElementById("flavour").value;
    
    let birthday = document.getElementById("birthday").value;

    let price = calculateprice(pizza, flavour);

    let deliveryPrice = calculateDelivery(price, birthday);

    printOrder(price, deliveryPrice);
}

function calculateprice(pizza, flavour){
    let price = Number(pizza) * 148;
    let additionalCost = 0;

    if((flavour === "cram decker")||(flavour==="Spicey Chicken")){
        additionalCost = Number(pizza) * 13;
    }

    price += additionalCost;
    return price;
}

function calculateDelivery(price,  birthday){
    let deliveryPrice = 0;

    if( (price > 150 && birthday === "yes")){
        deliveryPrice = 0;
    }else{
        deliveryPrice = 24;
    }

    return deliveryPrice;
}

function printOrder(price, deliveryPrice){
    let displayOrder = "<p> order is Successfully placed.</p>";

    if(deliveryPrice === 0){
        displayOrder += "<p>free delivery</p>";
    }else{
        displayOrder += "<p>Your delivery price: R" + deliveryPrice + "</p>";
    }

    displayOrder += "<p>Your total price: R" + (price + deliveryPrice) + "</p>";
    document.getElementById("displayResults").innerHTML = displayOrder;
}