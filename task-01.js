function makeTransaction(quantity, pricePerDroid) {
    var totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}