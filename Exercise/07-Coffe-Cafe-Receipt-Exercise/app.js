// Declaration of the cafeMenu object with prices for each item
const cafeMenu = {
    coffee: 3.50,
    latte: 4.25,
    cappuccino: 4.00,
    tea: 2.50,
    pastry: 2.75,
    croissant: 3.00,
}

// Function to create a receipt based on ordered items
function generateReceipt(orderedItems) {
    let total = 0;
    let receipt = "=== COFFEE CAFE RECEIPT ===\n";

    // Loop through each ordered item to calculate total and build receipt
    for (let item of orderedItems) {
        if (cafeMenu[item]) {
            let price = cafeMenu[item];
            total += price; // Add item price to total
            receipt += `${item.charAt(0).toUpperCase() + item.slice(1)}: $${price.toFixed(2)}\n`;
        } else {
            receipt += `${item}: Not available\n`;
        }
    }
    // Calculate tax and final total
    let tax = total * 0.08;
    let finalTotal = total + tax;
    // Append totals to receipt
    receipt += "-------------------\n";
    receipt += `Subtotal: $${total.toFixed(2)}\n`;
    receipt += `Tax (8%): $${tax.toFixed(2)}\n`;
    receipt += `Total: $${finalTotal.toFixed(2)}\n`;
    receipt += "===================";

    return receipt; // Return the complete receipt
};

// Example usage of the generateReceipt function
const orderItems = ["coffee", "pastry", "latte", "croissant"];
console.log(generateReceipt(orderItems));