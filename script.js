function updatePrice(qtId, prxId, prxbase) {
    let quantity = Number(document.getElementById(qtId).value);
    let price = Number(document.getElementById(prxId).innerText);
    let totalPrice = quantity * Number(prxbase);
    console.log(totalPrice)
    
    document.getElementById(prxId).innerText = totalPrice; 
}

function minus(qtId, prxId,prxbase) {
    let qtInput = document.getElementById(qtId);
    let quantity = Number(qtInput.value);

    if (quantity > 0) {
        quantity--;
        qtInput.value = quantity;
    }
    updatePrice(qtId, prxId,prxbase); 
}

function plus(qtId, prxId,prxbase) {
    let qtInput = document.getElementById(qtId);
    let quantity = Number(qtInput.value);
    quantity++;
    qtInput.value = quantity;

    updatePrice(qtId, prxId,prxbase); 
}



